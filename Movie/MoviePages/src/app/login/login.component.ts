import { Component, OnInit } from '@angular/core';
import { MovielistService } from '../movielist.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UseraccountService } from '../useraccount.service';
import { Router } from '@angular/router';
import { AdminGuard } from '../guard/admin.guard';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

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
    private authservice:AuthService
  ) {}

    emailNotFound:any;
    wrongPassword:any;
    helper = new JwtHelperService();

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


  loginCheck(){
    const loginInfo = {
      email:this.myForm.value.email,
      password:this.myForm.value.password
    }
    this.authservice.signin(loginInfo).subscribe((res1:any)=>{
      let decodedToken=this.helper.decodeToken(res1.accessToken);
      decodedToken.role=res1.role;
      decodedToken.password=this.myForm.value.password;
      this.MovielistService.loggedInUserInfo=decodedToken;
      console.log(this.MovielistService.loggedInUserInfo)
      if(res1.role==='USER'){
        this.MovielistService.isUser[0]=true;
      }else{
        this.MovielistService.isUser[0]=false;
      }
      this.MovielistService.isLogin[0]=true;
      localStorage.setItem('token',res1.accessToken)
      this.router.navigate([`${'movieItem/movieItem/'}`])
    },error=>{
      this.wrongPassword=true;      
    })
  }

  goToRegisterPage() {
    this.router.navigate([`${'register/register'}`]);
  }

  emailCheck(){
    const emailInfo={
      email:this.myForm.value.email
    }
    this.authservice.checkEmail(emailInfo).subscribe(res=>{
      this.emailNotFound=!res
    })
  }
  passwordHintReset(){
    this.wrongPassword=false;
  }
}
