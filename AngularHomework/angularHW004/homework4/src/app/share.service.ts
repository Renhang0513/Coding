import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private httpClient:HttpClient) { }
getBooks(value:string):Observable<any>{
  return this.httpClient.get(`https://www.googleapis.com/books/v1/volumes?q=${value}`).pipe(
    map((d:any)=>{
    return d.items}))
}
//book list


//---Wish list data
wistlists:any=[];
obsof1=of(this.wistlists)

//---remove wish list
removeWishFn(name:any){
  for(let i =0;i<this.wistlists.length;i++){
    if(this.wistlists[i]==name){
      this.wistlists.splice(i,1)
    }
  }
  }
}
