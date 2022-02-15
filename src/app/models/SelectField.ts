import { FieldType } from './FieldType.enum';
import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { Field } from './Field';

export class SelectField extends Field {
  constructor(
    public name = '',
    public options: string[] = [],
    public placeholder: string = '',
    public validators: ValidatorFn[] = [],
    public asyncValidators: AsyncValidatorFn[] = []
  ) {
    super(name, FieldType.text, placeholder, validators, asyncValidators);
  }
}
