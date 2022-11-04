import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { YouTubePlayer } from '@angular/youtube-player';
import { map } from 'rxjs';
import { MovielistService } from '../movielist.service';
@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data:any, private movielistservice:MovielistService) { }

  selectedMovieID:any;
  youtubeID:any;
  movieDetailRes:any;

  ngOnInit(): void {
   this.selectedMovieID=this.data
    console.log(this.selectedMovieID);

  //----Youtube insert
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.body.appendChild(tag);
  //--call service and receive youtube ID
 this.movielistservice.getVideo(this.selectedMovieID).subscribe(res=>{
  this.youtubeID=res[0].key
 })
//--get movie detail
 this.movielistservice.getDetail(this.selectedMovieID)
 .pipe(map((d:any)=>{
  const obj={
    title:d.original_title,
    overview:d.overview,
    release_date:d.release_date,
    vote_average:d.vote_average
  }
  return obj;
  }))
 .subscribe(res=>{
  this.movieDetailRes=res;
  console.log(this.movieDetailRes);
 })

  }
//----test consol


} 
