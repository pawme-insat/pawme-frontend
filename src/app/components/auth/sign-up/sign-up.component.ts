import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpGQL } from 'src/app/services/pawme.graphql.service';
import { Field } from '../../../models/Field';
import { FieldType } from '../../../models/FieldType.enum';
import { SignUpFormValues } from './sign-up.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public form: Field[] = [
    new Field('email', FieldType.email, 'Please enter your email', '', []),
    new Field('password', FieldType.password, 'Please enter your password', '', []),
    new Field('password confirm', FieldType.password, 'Please confirm your password', '', []),
    new Field('first and last name', FieldType.text, 'Please enter your full name', '', []),
    new Field('phone', FieldType.text, 'Please enter your phone number', '', []),
    new Field('birth date', FieldType.date, '', '', []),
  ];

  public isLoading = false;
  public formErrors: string[] = [];

  constructor(private signUpGQL: SignUpGQL, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(values: SignUpFormValues) {
    const [firtName, ...lastName] = values['first and last name'].split(' ');
    const mutation = this.signUpGQL.mutate({
      registerDto: {
        email: values.email,
        address: { country: '', region: '', street: '', zip_code: -1 },
        birth_date: values['birth date'],
        first_name: firtName,
        last_name: lastName.join(' '),
        password: values.password,
        phone: Number(values.phone),
      },
    });

    mutation.subscribe((e) => {
      this.isLoading = e.loading;
      if (e.errors) this.formErrors = e.errors.map((e) => e.message);
      if (e.data) this.router.navigate(['/sign-in']);
    });
  }
}
