import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor(private ngZone: NgZone) { }

  title='Before Change'

  ngOnInit(): void {

    // setInterval(()=>
    //   console.log(this.title),1000
    // )


    this.ngZone.runOutsideAngular(()=>{
      setTimeout(() => {
        this.title='changed'
        if(this.title=='changed'){
          this.ngZone.run(()=>{
            this.title='ngrunchange'
          })
        }
      }, 3000);



    })
  }
  processWithinAngularZone(){

  }
  processOutsideOfAngularZone(){

  }
}
