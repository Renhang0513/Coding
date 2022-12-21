import { Component, NgZone, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.css']
})
export class Page6Component implements OnInit {
  pipe='Constantly'
  clicked=false;
  constructor(private service:DataService, private ngzone:NgZone) { }

  ngOnInit(): void {
  }

  imgList:any=[]

  callApi(){
    this.clicked=true
    this.imgList.length=0;
    for( let i = 0; i < 20; i++){
      this.service.getUser().subscribe((res:any)=>{
        this.imgList.push(res.results[0].picture.large)
        if(this.imgList.length===20){
          this.ngzone.run(()=>{
          })
        }
      })
    }
  }

  callApiWithOutSideZone(){
    this.ngzone.runOutsideAngular(()=>{
      this.callApi()
    })
  }

  changeDetection(){
    
  }


}
