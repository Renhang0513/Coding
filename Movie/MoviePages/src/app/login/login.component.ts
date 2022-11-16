import { Component, OnInit } from '@angular/core';
import { MovielistService } from '../movielist.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UseraccountService } from '../useraccount.service';
import { Router } from '@angular/router';
import { AdminGuard } from '../guard/admin.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    public MovielistService: MovielistService,
    private fb: FormBuilder,
    public useraccountService: UseraccountService,
    private router: Router,
    private auth:AdminGuard,
  ) {}
  myForm: any;
  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        ],
      ],
    });
  }
  get email() {
    return this.myForm.get('email');
  }
  get password() {
    return this.myForm.get('password');
  }

  loginCheck() {
    this.useraccountService.createdAccount.forEach((e) => {
      if (
        e.email === this.myForm.value.email &&
        e.password === this.myForm.value.password
      ) {
        if(e.role==='user'){
          this.MovielistService.isUser[0]=true
          this.MovielistService.isLogin[0] = true;
          this.router.navigate([`${'movieItem/movieItem'}`]);
          console.log(e.email)
          this.MovielistService.loggedInUserEmail=e.email;
        }
        else{
          console.log(e.email)
          this.MovielistService.isLogin[0] = true;
          this.router.navigate([`${'movieItem/movieItem'}`]);
          this.MovielistService.loggedInUserEmail=e.email;
        }

      }
    });
  }

  goToRegisterPage() {
    this.router.navigate([`${'register/register'}`]);
  }
}
