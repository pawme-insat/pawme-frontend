import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, map, catchError, of, filter, tap } from 'rxjs';
import { ValidateEmailGQL } from 'src/app/services/pawme.graphql.service';

@Injectable({ providedIn: 'root' })
export class EmailExistsValidator implements AsyncValidator {
  constructor(private validateEmailGQL: ValidateEmailGQL) {}

  validate(ctrl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    console.log(ctrl);
    return this.validateEmailGQL.fetch({ email: ctrl.value }).pipe(
      tap((e) => console.log(ctrl.value)),
      filter((e) => !e.loading && !!e.data),
      map((e) => e.data.validateEmail.user_exists),
      map((e) => (e ? { emailExists: e } : null))
    );
  }
}
