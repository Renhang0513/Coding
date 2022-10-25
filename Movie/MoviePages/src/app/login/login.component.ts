import { Component, OnInit } from '@angular/core';
import { MovielistService } from '../movielist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public MovielistService:MovielistService) { }

  ngOnInit(): void {
  }
  loginCheck(){

  }


}
