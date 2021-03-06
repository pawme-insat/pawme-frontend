import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { LoginGQL, User } from 'src/app/services/pawme.graphql.service';
import { SetToken, SetUser } from 'src/app/utils/ngxs/auth/auth.actions';
import { Field } from '../../../models/Field';
import { FieldType } from '../../../models/FieldType.enum';
import { LoginFormValues } from './sign-in.interface';
import { Validators } from '@angular/forms';
import { take } from 'rxjs';

const WRONG_EMAIL_STRING = 'Wrong Password Or Email';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  form: Field[] = [
    new Field('email', FieldType.text, 'Please enter your email', [Validators.required, Validators.email]),
    new Field('password', FieldType.password, 'Please enter your password', [Validators.required]),
  ];

  public isLoading = false;
  public formErrors: string[] = [];

  constructor(private loginGQL: LoginGQL, private router: Router, private store: Store) {}

  ngOnInit(): void {}

  onSubmit(values: LoginFormValues): void {
    const query = this.loginGQL.watch({
      credentials: { email: values.email, password: values.password },
    }).valueChanges;

    query.pipe(take(1)).subscribe(
      (e) => {
        this.isLoading = e.loading;
        if (e.errors) this.formErrors = e.errors.map((e) => e.message);
        if (e.data) this.store.dispatch([new SetToken(e.data.login.token), new SetUser(e.data.login.user as User)]);
        this.router.navigate(['/']);
      },
      (e) => {
        if (!this.formErrors.find((e) => e == WRONG_EMAIL_STRING)) this.formErrors.push(WRONG_EMAIL_STRING);
      }
    );
  }
}
