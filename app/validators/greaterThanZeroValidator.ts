import { Validator, AbstractControl, ValidatorFn, NG_VALIDATORS, Validators } from "@angular/forms";
import { Directive } from "@angular/core";

export function greaterThanZeroValidator() : ValidatorFn {
    return (control: AbstractControl): { [key: string]: any; } => {
        let num = parseInt(control.value);
        
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
    private valFn = Validators.nullValidator;

    constructor() {
        this.valFn = greaterThanZeroValidator();

    }

    validate(control: AbstractControl): { [key: string]: any } {
        return this.valFn(control);
    }
}