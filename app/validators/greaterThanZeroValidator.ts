import { Validator, AbstractControl, ValidatorFn, NG_VALIDATORS, Validators } from "@angular/forms";
import { Directive, Input, OnChanges, SimpleChanges } from "@angular/core";

export function greaterThanZeroValidator(test: any) : ValidatorFn {
    return (control: AbstractControl): { [key: string]: any; } => {
        let num = parseInt(control.value);
        //console.log(test);
        
        return control.value === null
            || control.value === undefined
            || control.value === ''
            || num > 0 ? null : { 'greaterThanZero': { valid: false } };
    };
}

@Directive({
    selector: '[greaterThanZero]',
    providers: [{ provide: NG_VALIDATORS, useExisting: GreaterThanZeroValidatorDirective, multi: true }]
})
export class GreaterThanZeroValidatorDirective implements Validator {
    @Input() greaterThanZero: any;
    private valFn = Validators.nullValidator;

    constructor() {
        this.valFn = greaterThanZeroValidator(this.greaterThanZero);
    }

    ngOnChanges(changes: SimpleChanges): void {
        const change = changes['greaterThanZero'];
        if (change) {
            let otherValue = change.currentValue;
            console.log(otherValue);
            //const val: string | RegExp = change.currentValue;
            //const re = val instanceof RegExp ? val : new RegExp(val, 'i');
            this.valFn = greaterThanZeroValidator(this.greaterThanZero);
        } else {
            this.valFn = Validators.nullValidator;
        }
    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }
}