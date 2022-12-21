import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private ngZone: NgZone) { 
    this.ngZone.runOutsideAngular(() => {
    });
  }

  ngOnInit(): void {
  }
  doSomething(){
    console.log('1234')
  }
  inputTExt='';

  inputChanged(){
    console.log('input changed')
  }
  
}
