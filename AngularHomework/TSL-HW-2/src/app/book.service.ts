import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Books, MyBook, Book } from './interface/dataTy.interface';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BookService {

  baseUrl = 'https://openlibrary.org/subjects/world.json';

  constructor(private http: HttpClient) {}

  booksInfo:MyBook[]=[]
  searchResult:MyBook[]=[];

  getBook() {
    return this.http.get<Books>(this.baseUrl).pipe(map((res:Books) => {
      return res.works.map((works:Book)=>{
        const eachBook:MyBook={
          authors:works.authors,
          title:works.title
        }
        return eachBook;
      })
    }),
    tap((books)=>{
     this.booksInfo=books
     console.log(this.booksInfo)
    })
    );
  }

  searchBook(title:string){
    if(title.length>1){
      this.searchResult=this.booksInfo.filter((res:MyBook)=>{
        return res.title.toLowerCase().includes(title.toLowerCase())
      })
    }else{
      this.searchResult=[];
    }
  }

}
