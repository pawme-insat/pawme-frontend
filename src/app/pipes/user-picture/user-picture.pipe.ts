import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'userPicture',
})
export class UserPicturePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (!value) return '/assets/user.jpg';

    return environment.restApiUrl + '/user-pictures/' + value;
  }
}
