import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
   apiUrl = Constants.apiBaseUrl;
  constructor(private http : HttpClient) { }

  getUser(userId  : string){
    return this.http.get(this.apiUrl+userId);
  }

  updateUser (userId : string , user:any){
    return this.http.put(this.apiUrl+userId,user);
  }


}
