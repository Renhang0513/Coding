import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(lists: any, sorter: boolean): any {
    if(sorter){
      return lists.reverse();
    }else{
      lists.sort((a:any,b:any)=>{
        if ( a.firstName < b.firstName ){
          return -1;
        }
        if ( a.firstName > b.firstName ){
          return 1;
        }
        return 0;
      })
      return lists;
    }
}
}
