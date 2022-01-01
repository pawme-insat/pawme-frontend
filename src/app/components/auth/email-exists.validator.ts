import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, map, catchError, of, filter, tap, debounce, debounceTime, concatMap } from 'rxjs';
import { ValidateEmailGQL } from 'src/app/services/pawme.graphql.service';

@Injectable({ providedIn: 'root' })
export class EmailExistsValidator implements AsyncValidator {
  constructor(private validateEmailGQL: ValidateEmailGQL) {}

  validate = (ctrl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return ctrl.valueChanges.pipe(
      debounceTime(500),
      concatMap((_) => this.validateEmailGQL.fetch({ email: ctrl.value })),
      filter((e) => !e.loading && !!e.data),
      map((e) => e.data.validateEmail.user_exists),
      map((e) => (e ? { emailExists: e } : null))
    );
  };
}
