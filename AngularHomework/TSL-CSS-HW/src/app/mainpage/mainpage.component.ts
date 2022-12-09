import { Component, OnInit } from '@angular/core';
import { CardService } from '../service/card.service';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  constructor(private cardservice:CardService) { }
  listInfo=this.cardservice.list
  displayInfo:any;
  selectedColor:any;

  borderLeft='3px solid '+'item.color'
  ngOnInit(): void {
 
  }
  selectedInfo(selectedName:any){
    this.displayInfo=this.listInfo.filter(e=>{
      return e.name===selectedName
    })
    this.selectedColor=this.displayInfo[0].color
  }

}
