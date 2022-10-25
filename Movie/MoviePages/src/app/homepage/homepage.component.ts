import { Component, OnInit } from '@angular/core';
import { MovielistService } from '../movielist.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private MovielistService:MovielistService) { }
lists:any=[];

  ngOnInit(): void {
    this.lists=this.MovielistService.movieLists();
    console.log(this.lists);
    
  }

}
