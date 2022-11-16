import { Component, OnInit } from '@angular/core';
import { MovielistService } from '../movielist.service';
import { Router } from '@angular/router';
import { UseraccountService } from '../useraccount.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public MovielistService:MovielistService,private router: Router,private useraccountservice:UseraccountService) { }

  isLogin=[false];
  ngOnInit(): void {
    // this.goToLoginPage('movieItem/movieItem')
    this.MovielistService.islogin$.subscribe(res=>{
      this.isLogin=res;
    })
  }
  goToLoginPage(login:string){
    this.router.navigate([`${login}`]);
  }

  logout(){
    this.MovielistService.isLogin[0]=false;
    this.MovielistService.isUser[0]=false;
    this.router.navigate(['homepage']);
  }

  roleTest(){
    console.log(this.MovielistService.isUser)
    console.log(this.MovielistService.loggedInUserEmail)
    console.log(this.useraccountservice.createdAccount)
  }

}
 