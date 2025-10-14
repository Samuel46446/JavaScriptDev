import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doctorsPage'
})
export class DoctorsPagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
