import { FieldType } from './FieldType.enum';

export class Field {
  constructor(
    public name = '',
    public type = FieldType.text,
    public placeholder = '',
    public validators = []
  ) {}
}
