import { Validator, AbstractControl, ValidatorFn, NG_VALIDATORS, Validators } from "@angular/forms";
import { Directive, Input, OnChanges, SimpleChanges } from "@angular/core";

@Directive({
    selector: '[greaterThan]',
    providers: [{ provide: NG_VALIDATORS, useExisting: GreaterThanValidatorDirective, multi: true }]
})
export class GreaterThanValidatorDirective implements Validator {
    @Input() greaterThan: any;

    validate(control: AbstractControl): { [key: string]: any } {
        console.log(this.greaterThan);
        console.log(control.value);
        let num = parseInt(control.value);

        return control.value === null
            || control.value === undefined
            || control.value === ''
            || num > this.greaterThan ? null : { 'greaterThan': { valid: false } };
    }
}