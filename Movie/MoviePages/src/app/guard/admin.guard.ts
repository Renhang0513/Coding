import { A11yModule } from '@angular/cdk/a11y';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MovielistService } from '../movielist.service';

@Injectable({
  providedIn: 'root'
})


export class AdminGuard implements CanActivate {
     
   isUser:any;
  constructor(private movielistservice:MovielistService){
    this.movielistservice.isUser$.subscribe(res=>{
      this.isUser=res[0];
    })
  }
  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {


      if(this.isUser){
        return false;
      }else{
        return true;
      }
 

      
  }
  
}
