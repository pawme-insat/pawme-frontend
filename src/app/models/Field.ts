import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { FieldType } from './FieldType.enum';

export class Field {
  options: any;
  rows: any;
  cols: any;

  constructor(
    public name = '',
    public type = FieldType.text,
    public placeholder = '',
    public validators: ValidatorFn[] = [],
    public asyncValidators: AsyncValidatorFn[] = []
  ) {}
}
