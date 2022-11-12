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

}
 