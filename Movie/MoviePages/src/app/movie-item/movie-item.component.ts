import { Component, OnInit } from '@angular/core';
import { MovielistService } from '../movielist.service';
import { MatDialog } from '@angular/material/dialog'
import { MoviedetailComponent } from '../moviedetail/moviedetail.component';

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

  constructor(public MovielistService:MovielistService, private matDialog:MatDialog) { }

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




//--Show movie detail
onOpenDialogClick(id:any){
this.matDialog.open(MoviedetailComponent,{
 data:id.target.id
});
}


}
