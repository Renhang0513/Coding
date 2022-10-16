import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  constructor() {
   }
  getLists = [
    {firstName:'Amy',lastName:'Watson',department:'Hr',salary:8000,  doj: new Date('2015-12-11')},
    {firstName:'John',lastName:'Doe',department:'Finance',salary:5000, doj: new Date('2013-07-23')},
    {firstName:'Shrishti',lastName:'Sharma',department:'IT',salary:10000, doj: new Date('2019-10-20')},
  ]
  sorter=false;

keyWord:any='';
  ngOnInit(): void {
  }
  resetButton(){
    this.keyWord='';
  }
  firstNamefn(){
this.sorter=!this.sorter;
  }


}
