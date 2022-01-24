import { FormGroup, ValidationErrors } from '@angular/forms';

export function confirmPassword(group: FormGroup): ValidationErrors | null {
  const password = group.get('password')?.value;
  const password_confirm = group.get('password confirm')?.value;

  const valid = !password || !password_confirm || password === password_confirm;
  return valid ? null : { confirm_password: true };
}
