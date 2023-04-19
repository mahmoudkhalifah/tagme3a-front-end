import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/user-login';
import { UserRegister } from '../models/user-register';
import jwt_decode from 'jwt-decode';
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  url = Constants.apiBaseUrl+"Users/";

  constructor(private httpClient:HttpClient) { }

  login(userLogin:UserLogin) : Observable<any>  {
    return this.httpClient.post(this.url+"Login",userLogin);
  }

  storeToken(token:string) {
    localStorage.setItem("token",token);
  }

  signup(userRegister:UserRegister) : Observable<any> {
    return this.httpClient.post(this.url+"Register",userRegister);
  }

  logout() {
    localStorage.removeItem("token");
  }

  isUserLoggedIn() : boolean {
    return localStorage.getItem("token") != null;
  }

  isAdmin() : boolean {
    if(this.isUserLoggedIn())
      return this.Payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] == Constants.adminRole;
    return false;
  }

  isUser() : boolean {
    if(this.isUserLoggedIn())
      return this.Payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] == Constants.userRole;
    return false;
  }

  isAuthorized(role : string) : boolean {
    if(this.isUserLoggedIn())
      return this.Payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] == role;
    return false;
  }

  getUserId() {
    if(this.isUserLoggedIn()) {
      return this.Payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
    }
  }

  get Payload() {
    const jwtPayload:any = jwt_decode(localStorage.getItem("token")??"");
    return jwtPayload;
  }

}
