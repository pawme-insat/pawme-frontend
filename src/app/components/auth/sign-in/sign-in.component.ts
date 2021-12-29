import { Component, OnInit } from '@angular/core';
import { Field } from '../../../models/Field';
import { FieldType } from '../../../models/FieldType.enum';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  form: Field[] = [
    new Field('username', FieldType.text, 'Please enter your username', '', []),
    new Field('password', FieldType.password, 'Please enter your password', '', []),
  ];

  public isLoading = false;
  public formErrors: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
