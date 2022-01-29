import { Pipe, PipeTransform } from '@angular/core';
import dayjs from 'dayjs';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): string {
    const now = dayjs();
    const v = dayjs(value);
    const result = v.diff(now , "months")
    return `${result} months` ;
  }
}
