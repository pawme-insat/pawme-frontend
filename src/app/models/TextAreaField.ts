import { FieldType } from './FieldType.enum';
import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { Field } from './Field';

export class TextAreaField extends Field {
  constructor(
    public name = '',
    public rows: number = 0,
    public cols: number = 0,
    public validators: ValidatorFn[] = [],
    public asyncValidators: AsyncValidatorFn[] = []
  ) {
    super(name, FieldType.text, '', validators, asyncValidators);
  }
}
