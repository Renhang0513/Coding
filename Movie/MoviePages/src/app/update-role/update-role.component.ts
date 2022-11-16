import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MovielistService } from '../movielist.service';
import { UseraccountService } from '../useraccount.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {

  userEmail='';

  constructor(private activatedRoute:ActivatedRoute,private movielistservice:MovielistService,private useraccountservice:UseraccountService,private router:Router) {
    this.activatedRoute.params.pipe(
      map((d:any)=>{
        return d.id
      })
    ).subscribe(res=>{
      this.userEmail=res
    })
   }

  ngOnInit(): void {

  }


changeRoleToAdmin(){
this.useraccountservice.createdAccount.forEach(e=>{
  if(e.email===this.userEmail){
    e.role='admin'
    this.movielistservice.isUser[0]=false;
    this.router.navigate([`${'movieItem/movieItem'}`]);
  }
})

}

changeRoleToSuper(){
  this.useraccountservice.createdAccount.forEach(e=>{
    if(e.email===this.userEmail){
      e.role='super'
      this.movielistservice.isUser[0]=false;
      this.router.navigate([`${'movieItem/movieItem'}`]);
    }
  })
  }
  dontChange(){
    this.router.navigate([`${'movieItem/movieItem'}`]);
  }

}
