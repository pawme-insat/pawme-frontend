import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpGQL } from 'src/app/services/pawme.graphql.service';
import { Field } from '../../../models/Field';
import { FieldType } from '../../../models/FieldType.enum';
import { SignUpFormValues } from './sign-up.interface';
import { Validators } from '@angular/forms';
import { FullNamePattern, PasswordPattern } from '../../../validators/patterns';
import { confirmPassword } from '../../../validators/confirm-password';
import { EmailExistsValidator } from '../../../validators/email-exists.validator';
import { Observable, filter, map } from 'rxjs';
import { AddressService } from '../../../services/address.service';
import { Address } from '../../../models/Address';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public form: Field[] = [
    new Field('email', FieldType.email, 'Please enter your email', [Validators.required, Validators.email]),
    new Field('password', FieldType.password, 'Please enter your password', [
      Validators.required,
      Validators.minLength(8),
      PasswordPattern,
    ]),
    new Field('password confirm', FieldType.password, 'Please confirm your password', [Validators.required]),
    new Field('first and last name', FieldType.text, 'Please enter your full name', [
      Validators.required,
      FullNamePattern,
    ]),
    new Field('phone', FieldType.text, 'Please enter your phone number', [
      Validators.required,
      Validators.minLength(8),
    ]),
    new Field('birth date', FieldType.date, '', []),
  ];

  crossValidators: Validators[] = [confirmPassword];

  public isLoading = false;
  public formErrors: string[] = [];

  constructor(
    private signUpGQL: SignUpGQL,
    private router: Router,
    private emailExistsValidator: EmailExistsValidator,
    private addressService: AddressService
  ) {}

  ngOnInit(): void {
    this.form.find((e) => e.name == 'email').asyncValidators.push(this.emailExistsValidator.validate);
    this.getUserLocation();
  }

  address: Address;

  onSubmit(values: SignUpFormValues) {
    const [firstName, ...lastName] = values['first and last name'].split(' ');
    const mutation = this.signUpGQL.mutate({
      registerDto: {
        email: values.email,
        // Todo: use address const here
        address: this.address
          ? {
              country: this.address.country,
              region: this.address.region,
              street: this.address.street,
              zip_code: this.address.zip_code,
            }
          : { country: '', region: '', street: '', zip_code: -1 },
        birth_date: values['birth date'],
        first_name: firstName,
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

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.addressService
            .getAddress(position.coords.latitude, position.coords.longitude)
            .pipe(map((result) => result['geonames'][0]))
            .subscribe((result) => {
              this.address = new Address(result['countryName'], result['adminName1'], result['name']);
            });
        },
        () => {
          this.address = null;
        }
      );
    }
  }
}
