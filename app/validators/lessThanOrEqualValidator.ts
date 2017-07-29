import { Validator, AbstractControl, ValidatorFn, NG_VALIDATORS, Validators } from "@angular/forms";
import { Directive, Input, OnChanges, SimpleChanges } from "@angular/core";

@Directive({
    selector: '[lessThanOrEqual]',
    providers: [{ provide: NG_VALIDATORS, useExisting: LessThanOrEqualValidatorDirective, multi: true }]
})
export class LessThanOrEqualValidatorDirective implements Validator {
    @Input() lessThanOrEqual: any;

    validate(control: AbstractControl): { [key: string]: any } {
        let num = parseInt(control.value);
        let lessThanOrEqual = parseInt(this.lessThanOrEqual);
        console.log('Less than or equal to: ' + lessThanOrEqual);

        return control.value === null
            || control.value === undefined
            || control.value === ''
            || isNaN(lessThanOrEqual)
            || num <= lessThanOrEqual ? null : { 'lessThanOrEqual': { valid: false } };
    }
}