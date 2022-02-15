import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'petPicture',
})
export class PetPicturePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (!value) return '/assets/user.jpg';

    return environment.restApiUrl + '/pets-pictures/' + value;
  }
}
