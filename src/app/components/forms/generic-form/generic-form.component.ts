import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Field} from '../../../models/Field';


@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss'],
})
export class GenericFormComponent implements OnInit {
  @Input() form: Field[] = [];
  @Input() crossValidators: Validators[] = []
  @Input() style: String = 'secondary';
  @Input() isLoading = false;
  @Input() formErrors: string[] = [];

  @Output() onSubmit = new EventEmitter<any>();

  formGroup: FormGroup | undefined;
  double: boolean = false
  controlsErrorMessages = {
    'required': 'This field is required',
    'email': 'Please enter a valid email',
    'minlength': 'This field requires at least 8 characters',
    'password_pattern':  'Should contain one uppercase, one lower case and a number',
    'full_name_pattern': 'Please enter both your first and last name',
  }

  groupErrorMessages = {
    'confirm_password': {message: 'Passwords don\'t match', position: 'password confirm'},
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.double = this.form.length > 3
    let config = {};
    let options = {validator: this.crossValidators}

    for (let field of this.form) {
      // @ts-ignore
      config[field.name] = ['', Validators.compose(field.validators)];
    }

    this.formGroup = this.fb.group(config, options);

  }

  getControl(name: string) {
    return this.formGroup.get(name);
  }

  getControlErrors(name: string){
    if (this.formGroup.get(name).errors) return Object.keys(this.formGroup.get(name).errors)
    return []
  }

  getGroupErrors() {
    if (this.formGroup.errors) return Object.keys(this.formGroup.errors)
    return []
  }

  isErrorField(name: string) {
    let errors = this.getGroupErrors()
    for(let error of errors) {
      if (this.groupErrorMessages[error].position == name) return true
    }
    return false
  }

  submit() {
    this.onSubmit.emit(this.formGroup.value);
  }
}
