import { Component, OnInit } from '@angular/core';
import { MovielistService } from '../movielist.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private MovielistService:MovielistService) { }

movieDisplayList:any=[]
  ngOnInit(): void {
    this.MovielistService.homePageMovieList$.subscribe(res=>{
      this.movieDisplayList=res;
    })
  }

homePageMoviesChange(){
this.MovielistService.homePageMovieList.length=0;
this.MovielistService.homePageMoviesChange();
}

}
