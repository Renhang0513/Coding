import { Component, OnInit } from '@angular/core';
import { characterType, MyBook } from '../interface/dataTy.interface';
import { BookService } from '../book.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})


export class Page1Component implements OnInit {

  searchResult:MyBook[]=[];
  selectedTitle:string='';
  displaySelected:MyBook[]=[];
  constructor(private bookservice:BookService) { }


  ngOnInit(): void {
  this.bookservice.getBook().subscribe();
  }

  getBk(){
    this.bookservice.getBook().subscribe()
  }
  searchBook(title:string){
    this.selectedTitle='';
    this.displaySelected=[];
    this.bookservice.searchBook(title.trim());
    this.searchResult=this.bookservice.searchResult;
  }
  selectedInfo(book:MyBook){
    this.selectedTitle=book.title
    this.displaySelected[0]=book;

  }

}
