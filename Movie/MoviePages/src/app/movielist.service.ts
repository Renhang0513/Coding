import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovielistService {

isLogin=[false];
islogin$=of(this.isLogin)

  constructor(private httpClient:HttpClient) {
    this.getMovies()
    this.homePageMoviesChange()

   }






baseUrl='https://api.themoviedb.org/3/movie/popular?api_key=426ab31f3c3285fdac7fa968b0dc6ae2&language=en-US&page=';
currentPage=1;

movieList:any=[];
movieList$=of(this.movieList);

homePageMovieList:any=[];
homePageMovieList$=of(this.homePageMovieList);

getMovies(){
  return this.httpClient.get(this.baseUrl+this.currentPage)
  .pipe(
    map((d:any)=>{
    return d.results;
    })
  ).subscribe(res=>{
  this.movieList.push(...res)
  this.currentPage++;
})
}

 homePage=1;

homePageMoviesChange(){
  this.homePage++;
if(this.homePage<20){
  return this.httpClient.get(this.baseUrl+this.homePage)
  .pipe(
    map((d:any)=>{
    return d.results;
    })
  ).subscribe(res=>{
  this.homePageMovieList.push(...res)
})
}else{
  this.homePage=1;
  return this.httpClient.get(this.baseUrl+this.homePage)
  .pipe(
    map((d:any)=>{
    return d.results;
    })
  ).subscribe(res=>{
  this.homePageMovieList.push(...res)
})
}
}


}
