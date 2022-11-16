import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseraccountService {

  constructor() { }

createdAccount=[
  {email:'account001@gmail.com',password:'Moviesss12312',role:'user'},
  {email: 'sad@gmail.com', password: 'asdasd12312As', role:'admin'},
  {email:'user@gmail.com',password:'Moviesss12312',role:'user'},
  {email:'admin@gmail.com',password:'Moviesss12312',role:'admin'},
  {email:'super@gmail.com',password:'Moviesss12312',role:'super'},
]

}
 