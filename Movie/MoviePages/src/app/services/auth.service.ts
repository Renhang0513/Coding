import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  emailCheckUrl = 'http://localhost:4231/auth/check-email';
  signinUrl = 'http://localhost:4231/auth/signin';
  signUpUrl = 'http://localhost:4231/auth/signup';
  userupdateUrl = 'http://localhost:4231/auth/userupdate';
  helper = new JwtHelperService();


  constructor(private httpClient: HttpClient) {}


  get Token() {
    return localStorage.getItem('token');
  }

  signin(info: any) {
    return this.httpClient.post(this.signinUrl, info)
  }

  checkEmail(email: any) {
    return this.httpClient.post(this.emailCheckUrl, email);
  }

  signUp(registerInfo: any) {
    return this.httpClient.post(this.signUpUrl, registerInfo);
  }

  updateUserRole(userInfo: any) {
    return this.httpClient.patch(this.userupdateUrl, userInfo);
  }
}

// registed acc
// {
//   "email": "user005@gmail.com",
//   "password": "asd123"
// }

// {
//   "username": "Henry",
//   "password": "Asd12345",
//   "email": "admin1234@gmail.com",
//   "role": "ADMIN",
//   "tmdb_key": "stringstringstr"
// }
