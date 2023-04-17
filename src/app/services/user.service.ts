import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/user-login';
import { UserRegister } from '../models/user-register';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://localhost:7004/api/Users/';

  constructor(private httpClient:HttpClient) { }

  onLogin(userLogin:UserLogin) : Observable<any>  {
    return this.httpClient.post(this.url+"Login",userLogin);
  }

  onSignup(userRegister:UserRegister) : Observable<any> {
    return this.httpClient.post(this.url+"Register",userRegister);
  }
}
