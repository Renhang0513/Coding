import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likepage',
  templateUrl: './likepage.component.html',
  styleUrls: ['./likepage.component.css']
})
export class LikepageComponent implements OnInit {

  likeCount=100;
  dislikeCount=20;
  likeClicked=false;
  dislikeClicked=false;

  constructor() { }

  ngOnInit(): void {
  }

  likebtnClicked(){
    if(this.likeClicked===false){
      this.likeClicked=true;
      this.likeCount++;
      if(this.dislikeClicked===true){
        this.dislikeCount--;
        this.dislikeClicked=false;
      }
    }
  }

  dislikebtnClicked(){
    if(this.dislikeClicked===false){
      this.dislikeCount++;
      this.dislikeClicked=true;
      if(this.likeClicked===true){
        this.likeCount--;
        this.likeClicked=false
      }
    }
  }
}
