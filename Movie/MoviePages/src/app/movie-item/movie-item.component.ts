import { Component, OnInit,OnDestroy } from '@angular/core';
import { MovielistService } from '../movielist.service';
import { MatDialog } from '@angular/material/dialog'
import { MoviedetailComponent } from '../moviedetail/moviedetail.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit, OnDestroy {

  currentScrolledPage=1;
  scrollLimit=20;
  scrollLimitReached=false;

  moviesDisplay:any=[];

  isUserRole:any;
  constructor(public MovielistService:MovielistService, private matDialog:MatDialog,private router: Router) { }


  ngOnInit(): void {
    this.MovielistService.movieList$.subscribe(res=>{
      this.moviesDisplay=res;
    }
    )
  setTimeout(() => {
    window.scrollTo(0,this.MovielistService.scrollPosition)
  }, 100);

  this.MovielistService.isUser$.subscribe(res=>{
    this.isUserRole=res[0];
  })

  }

//----infin scroll

infiniteScrollFn(){
  this.currentScrolledPage++;
  if(this.currentScrolledPage<=this.scrollLimit){
    this.MovielistService.getMovies();
  }else{
    this.scrollLimitReached=true;
  }
}

scrollEvent(){
//   window.addEventListener("scroll", (event) => {
//     let scroll = window.scrollY
//     console.log(scroll)
// });

console.log(window.scrollY)

}

// scrollTo(){
//   return window.scrollTo(0,14100)
// }

//--Show movie detail
onOpenDialogClick(id:any){
this.matDialog.open(MoviedetailComponent,{
 data:id.target.id
});
}

//--go to movieinfo page
goToLoginPage(login:any){
  if(this.isUserRole){
    let email='/updateRole/'+this.MovielistService.loggedInUserEmail;
    this.router.navigate([`${email}`]);
  }else{
    let movieInfoAddress='/movieinfos/'+login.target.id
    this.router.navigate([`${movieInfoAddress}`]);
  }
}

ngOnDestroy(): void {
this.MovielistService.scrollPosition=window.scrollY;
}

}
