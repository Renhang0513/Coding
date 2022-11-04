import { Component, OnInit } from '@angular/core';
import { MovielistService } from '../movielist.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UseraccountService } from '../useraccount.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public MovielistService:MovielistService,private fb:FormBuilder,public useraccountService:UseraccountService,private router: Router) { }
  myForm:any;

  ngOnInit(): void { 
 
    this.myForm=this.fb.group({
      email:['',
      [Validators.required,
        Validators.email,
      ]],
      password:['',[
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
    })

  }
  get email(){
    return this.myForm.get('email');
  }
  get password(){
    return this.myForm.get('password');
  }

  
  loginCheck(){
this.useraccountService.createdAccount.forEach(e=>{
  if(e.email===this.myForm.value.email && e.password ===this.myForm.value.password){
    this.MovielistService.isLogin[0]=true;
    this.router.navigate([`${'movieItem'}`]);
  }
})
}

goToRegisterPage(){
  this.router.navigate([`${'register'}`]);
}


}
