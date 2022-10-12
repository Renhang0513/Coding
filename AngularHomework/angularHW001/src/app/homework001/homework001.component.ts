import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-homework001',
  templateUrl: './homework001.component.html',
  styleUrls: ['./homework001.component.css']
})
export class Homework001Component implements OnInit {


  constructor(private DataService:DataService) { }

  Lists:any = [];
  ngOnInit(): void {
    this.Lists = this.DataService.getLists();
  }
divColor:string='';
id:number=0;
clickFn(color:any){
  this.divColor=color.target.value;
  this.id=color.target.id;
}
}
