import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {
num=0;
  constructor(private ngzone:NgZone) { }

  interval:any;
  


  ngOnInit(): void {

  }

 


}


