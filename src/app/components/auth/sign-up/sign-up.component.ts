import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpGQL } from 'src/app/services/pawme.graphql.service';
import { Field } from '../../../models/Field';
import { FieldType } from '../../../models/FieldType.enum';
import { SignUpFormValues } from './sign-up.interface';
import {Validators} from "@angular/forms";
import {FullNamePattern, PasswordPattern} from "../../../validators/patterns";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public form: Field[] = [
    new Field('email', FieldType.email, 'Please enter your email', [Validators.required, Validators.email]),
    // should follow a decent password pattern
    new Field('password', FieldType.password, 'Please enter your password',  [Validators.required, PasswordPattern]),
    new Field('password confirm', FieldType.password, 'Please confirm your password',  [Validators.required]),
    // should contain at least one space
    new Field('first and last name', FieldType.text, 'Please enter your full name', [Validators.required, FullNamePattern]),
    new Field('phone', FieldType.text, 'Please enter your phone number',  [Validators.required, Validators.minLength(8)]),
    new Field('birth date', FieldType.date, '',  []),
  ];

  public isLoading = false;
  public formErrors: string[] = [];

  constructor(private signUpGQL: SignUpGQL, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(values: SignUpFormValues) {
    // const [firstName, ...lastName] = values['first and last name'].split(' ');
    // const mutation = this.signUpGQL.mutate({
    //   registerDto: {
    //     email: values.email,
    //     address: { country: '', region: '', street: '', zip_code: -1 },
    //     birth_date: values['birth date'],
    //     first_name: firstName,
    //     last_name: lastName.join(' '),
    //     password: values.password,
    //     phone: Number(values.phone),
    //   },
    // });
    //
    // mutation.subscribe((e) => {
    //   this.isLoading = e.loading;
    //   if (e.errors) this.formErrors = e.errors.map((e) => e.message);
    //   if (e.data) this.router.navigate(['/sign-in']);
    // });
  }
}
