import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  pure:false
})
export class CustomPipe implements PipeTransform {
   num=0;
  transform(value: any, ...args: unknown[]): unknown {
    this.num++;
    console.log('Impure pipe transform method called '+ this.num + ' times')
    return value;
  }

}
