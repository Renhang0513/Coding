import { Component, OnInit } from '@angular/core';
import { MovielistService } from '../movielist.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UseraccountService } from '../useraccount.service';
import { Router } from '@angular/router';

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
    private router: Router
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
      confirmPassword: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });
  }
  get email() {
    return this.myForm.get('email');
  }
  get password() {
    return this.myForm.get('password');
  }
  get confirmPassword() {
    return this.myForm.get('confirmPassword');
  }
  get role() {
    return this.myForm.get('role');
  }

  loginCheck() {
    let qualify = true;
    if (this.myForm.value.password !== this.myForm.value.confirmPassword) {
      this.confirmPWHint = true;
      qualify = false;
    }
    this.useraccountService.createdAccount.forEach((e) => {
      if (e.email == this.myForm.value.email) {
        this.emailHint = true;
        qualify = false;
      }
    });
    if (qualify) {
      console.log('this is qualify')
      this.router.navigate([`${'login/login'}`]);
      this.useraccountService.createdAccount.push(...[this.myForm.value]);
    }
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
