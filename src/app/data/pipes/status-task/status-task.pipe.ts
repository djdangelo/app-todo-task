import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTask',
  standalone: false
})
export class StatusTaskPipe implements PipeTransform {

  transform(value: boolean) {
    if (value) {
      return 'Completed';
    }
    return 'Pending';
  }
}
