import { A11yModule } from '@angular/cdk/a11y';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MovielistService } from '../movielist.service';

@Injectable({
  providedIn: 'root'
})


export class AdminGuard implements CanActivate {

  constructor(private movielistservice:MovielistService){

  }

  canActivate(
  
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {

      let islogin:any;
      let isUserGuard:any;
      this.movielistservice.islogin$.subscribe(res=>{
        islogin=res[0]
      })
      this.movielistservice.isUser$.subscribe(res1=>{
        isUserGuard=res1[0];
      })


      if(!isUserGuard){
        return true;
      }else{
        return false;
      }

      
  }
  
}
