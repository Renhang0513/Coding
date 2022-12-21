import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, reduce } from 'rxjs';
import { MovielistService } from '../movielist.service';
import { MatDialog } from '@angular/material/dialog'
import { MoviedetailComponent } from '../moviedetail/moviedetail.component';

@Component({
  selector: 'app-movieinfos',
  templateUrl: './movieinfos.component.html',
  styleUrls: ['./movieinfos.component.css']
})
export class MovieinfosComponent implements OnInit {

currentID:any;
selectedDetail:any;
baseimgUrl='https://www.themoviedb.org/t/p/w300_and_h450_bestv2/';

  constructor(private activatedRoute:ActivatedRoute, private movielistService:MovielistService,private matDialog:MatDialog) {




    this.activatedRoute.params.pipe(
      map((d:any)=>{
        return d.id
      })
    ).subscribe((params)=>{
      this.currentID=params
      this.movielistService.getDetail(this.currentID).subscribe((res:any)=>{
       this.selectedDetail=res;
       this.baseimgUrl=this.baseimgUrl+this.selectedDetail.backdrop_path;
      })
    })
   }

  ngOnInit(): void {
  }

  
  //---watch youtube trailer
  onOpenDialogClick(id:any){
    console.log(this.selectedDetail)
    this.matDialog.open(MoviedetailComponent,{
     data:id.target.id
    });
    }


}
