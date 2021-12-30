import {AbstractControl, ValidationErrors} from "@angular/forms";

export function PasswordPattern(control: AbstractControl): ValidationErrors | null {

  // minimum eight characters, at least one uppercase letter, one lowercase letter and one number
  const password = control?.value;
  if (!password) return null

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;

  return password.match(regex) ? null : {password_pattern: true};
}

export function FullNamePattern(control: AbstractControl): ValidationErrors | null {

  //has at least one space in the middle
  const fullName = control?.value;
  if (!fullName) return null
  const regex = /^[a-zA-Z].*\s[a-zA-Z]+/g;

  return fullName.match(regex) ? null : {full_name_pattern: true};
}
