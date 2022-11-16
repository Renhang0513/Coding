import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }

notes:any=[]
notes$=of(this.notes)
localNote:any=[]

}
