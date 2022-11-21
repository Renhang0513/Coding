import { Component, OnInit } from '@angular/core';
import { MovielistService } from '../movielist.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UseraccountService } from '../useraccount.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  confirmPWHint = false;
  emailHint = false;

  emailHintMSG = 'This email is already registered';
  confirmPWHintMSG = 'Password does not match';

  constructor(
    public MovielistService: MovielistService,
    private fb: FormBuilder,
    public useraccountService: UseraccountService,
    private router: Router,
    private auth: AuthService
  ) {}
  myForm: any;
  foundEmail: any;
  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required]],
      TmdbKey: ['', [Validators.required, Validators.minLength(15)]],

      confirmPassword: ['', [Validators.required]],
    });
  }

  get username() {
    return this.myForm.get('username');
  }
  get password() {
    return this.myForm.get('password');
  }
  get email() {
    return this.myForm.get('email');
  }
  get role() {
    return this.myForm.get('role');
  }
  get TmdbKey() {
    return this.myForm.get('TmdbKey');
  }
  get confirmPassword() {
    return this.myForm.get('confirmPassword');
  }

  registerCheck() {
    let qualify = true;
    if (this.myForm.value.password !== this.myForm.value.confirmPassword) {
      this.confirmPWHint = true;
      qualify = false;
    } else {
      const registerInfo = {
        username: this.myForm.value.username,
        password: this.myForm.value.password,
        email: this.myForm.value.email,
        role: this.myForm.value.role,
        tmdb_key: this.myForm.value.TmdbKey,
      };
      this.auth.signUp(registerInfo).subscribe(
        (res) => {
          console.log(res)
          this.router.navigate([`${'login/login'}`]);
        },
        (error) => {
          alert('Please enter valid info');
        }
      );
    }
  }

  emailExistCheck() {
    const emailInfo = {
      email: this.myForm.value.email,
    };
    this.auth.checkEmail(emailInfo).subscribe((res: any) => {
      console.log(res);
      this.foundEmail = res;
    });
  }

  emailHintMSGReset() {
    this.emailHint = false;
  }
  confirmPWMSGReset() {
    this.confirmPWHint = false;
  }

  goToSignInPage() {
    this.router.navigate([`${'login/login'}`]);
  }
}
