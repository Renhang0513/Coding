import { Component, OnInit } from '@angular/core';
import { MovielistService } from '../movielist.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public MovielistService:MovielistService,private router: Router) { }

  isLogin:boolean=true;
  isNotLogin:boolean=false;
  ngOnInit(): void {
    this.goToLoginPage('homepage')
  }
  goToLoginPage(login:string){
    this.router.navigate([`${login}`]);
    console.log(this.isLogin);
    this.isLogin=!this.isLogin;
    this.isNotLogin=!this.isNotLogin;
  }


}
