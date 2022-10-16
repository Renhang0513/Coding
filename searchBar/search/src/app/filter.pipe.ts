import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(Lists: any[], keyWord: string): any {
    const filtered = Lists.filter(n=>n.firstName.toLowerCase().indexOf(keyWord.replace(/\s/g, '').toLowerCase())!==-1);
    return filtered;
  }
}
