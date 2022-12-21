import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

url='https://randomuser.me/api'


getUser(){
  return this.http.get(this.url)
  // .subscribe((res:any)=>{
  //   console.log(res.results[0].picture.large)
  //   this.imglist.push(res.results[0].picture.large)
  // })
}

}
