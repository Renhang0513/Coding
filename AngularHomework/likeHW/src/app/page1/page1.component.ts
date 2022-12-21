import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  num=0;
  num2=0;
  constructor(private ngZone:NgZone) { 
    this.ngZone.runOutsideAngular(()=>{
      this.changingNum();
      this.ngZone.run(()=>{
        this.num === 10;
      })
    })
 
  }

 

  ngOnInit(): void {
    // this.changingNum();
  }

  changingNum(){
    setInterval(()=>{
      this.num++
    },1000)
  }
numPlue(){
  this.num2 ++;
}

}
