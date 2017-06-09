import { Validator, AbstractControl, ValidatorFn, NG_VALIDATORS, Validators } from "@angular/forms";
import { Directive, Input } from "@angular/core";

@Directive({
    selector: '[requiredIf]',
    providers: [{ provide: NG_VALIDATORS, useExisting: RequiredIfValidatorDirective, multi: true }]
})
export class RequiredIfValidatorDirective implements Validator {
    @Input() requiredIf: any;

    validate(control: AbstractControl): { [key: string]: any } {
        return !this.hasValue(this.requiredIf)
            || this.hasValue(control.value)
            ? null : { 'requiredIf': { valid: false } };
    }

    private hasValue(field: any): boolean {
        return field !== null && field !== undefined && field !== '';
    }
}