import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { ShareService } from '../share.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books$: any;

  constructor(private shareService:ShareService) { }

  private subjectKeyUp = new Subject<any>();

  ngOnInit(): void {
    this.subjectKeyUp.pipe(debounceTime(500)).subscribe((res)=>{
      this.getBooks(res)
    })

  }
//---render book
  onSearch($event:any){
const value=$event.target.value;
this.subjectKeyUp.next(value);
}
getBooks(value:string){
  this.books$=this.shareService.getBooks(value);
}

//---add book function
addBookFn(name:any){
this.shareService.wistlists.push(name.target.value)
}
}

