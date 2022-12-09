import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitedlenght'
})
export class LimitedlenghtPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.length > 100 ? value.substring(0, 100) + '...' : value;
  }

}
