import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Field } from '../../../models/Field';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss'],
})
export class GenericFormComponent implements OnInit {
  @Input() form: Field[] = [];
  @Input() style: String = 'secondary';
  @Input() isLoading = false;
  @Input() formErrors: string[] = [];

  @Output() onSubmit = new EventEmitter<any>();

  formGroup: FormGroup | undefined;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    let config = {};

    for (let field of this.form) {
      // @ts-ignore
      config[field.name] = ['', Validators.compose(field.validators)];
    }

    this.formGroup = this.fb.group(config);
  }

  submit() {
    this.onSubmit.emit(this.formGroup.value);
  }
}
