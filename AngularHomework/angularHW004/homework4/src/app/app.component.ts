import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework4';
  showWish=true;
  wishListSwitch(){
    this.showWish=false;
  }
  wishListHome(){
    this.showWish=true;
  }
}
