import { Component, OnInit } from '@angular/core';
import { Field } from '../../../models/Field';
import { FieldType } from '../../../models/FieldType.enum';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  form: Field[] = [];
  constructor() {}

  ngOnInit(): void {
    this.form.push(new Field('email', FieldType.email, 'Please enter your email', '', []));
    this.form.push(new Field('username', FieldType.text, 'Please enter your username', '', []));
    this.form.push(new Field('password', FieldType.password, 'Please enter your password', '', []));
    this.form.push(new Field('password confirm', FieldType.password, 'Please confirm your password', '', []));
    this.form.push(new Field('first and last name', FieldType.text, 'Please enter your full name', '', []));
    this.form.push(new Field('phone', FieldType.text, 'Please enter your phone number', '', []));
    this.form.push(new Field('birth date', FieldType.date, '', '', []));
  }
}
