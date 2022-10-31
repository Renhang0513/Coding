import { Component, OnInit } from '@angular/core';
import { MovielistService } from '../movielist.service';
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  currentScrolledPage=1;
  scrollLimit=20;
  scrollLimitReached=false;

  firstRender=false;

  moviesDisplay:any=[];

  constructor(public MovielistService:MovielistService) { }

  ngOnInit(): void {
    this.MovielistService.movieList$.subscribe(res=>{
      this.moviesDisplay=res;
    })
  }



//----infin scroll


infiniteScrollFn(){
  this.currentScrolledPage++;
  if(this.currentScrolledPage<=this.scrollLimit){
    this.MovielistService.getMovies();
    console.log(this.currentScrolledPage);
  }else{
    this.scrollLimitReached=true;
  }

}

}
