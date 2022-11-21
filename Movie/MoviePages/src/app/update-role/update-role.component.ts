import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MovielistService } from '../movielist.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css'],
})
export class UpdateRoleComponent implements OnInit {
  userEmail = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private movielistservice: MovielistService,
    private router: Router,
    private auth: AuthService
  ) {
    this.activatedRoute.params
      .pipe(
        map((d: any) => {
          return d.id;
        })
      )
      .subscribe((res) => {
        this.userEmail = res;
      });
  }

  ngOnInit(): void {
    if (!this.movielistservice.isLogin[0]&&this.movielistservice.isUser[0]) {
      this.router.navigate([`${'login/login'}`]);
    }
  }

  //---

  updateRole(updateRole: any) {
    const updateUserInfo = this.movielistservice.loggedInUserInfo;
    updateUserInfo.role = updateRole.target.value;
    delete updateUserInfo.exp;
    delete updateUserInfo.iat;
    delete updateUserInfo.id;
    console.log(updateUserInfo);
    this.auth.updateUserRole(updateUserInfo).subscribe(
      (res1: any) => {
        this.movielistservice.isUser[0] = false;
        alert('We changed your role to ' + updateRole.target.value);
        this.router.navigate([`${'movieItem/movieItem/'}`]);
      },
      (error) => {
        alert('Please Login first!');
      }
    );
  }
  dontChange() {
    this.router.navigate([`${'movieItem/movieItem'}`]);
  }
}
