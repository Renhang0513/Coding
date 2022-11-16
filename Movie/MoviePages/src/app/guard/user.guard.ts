import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MovielistService } from '../movielist.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private movielistservice:MovielistService){

  }

 canActivate(
  
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {

      let islogin:any;
      this.movielistservice.islogin$.subscribe(res=>{
        islogin=res[0]
      })

      if(islogin){
        return true;
      }else{
        return false;
      }

      
  }
}
