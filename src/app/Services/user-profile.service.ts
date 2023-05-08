import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
   apiUrl = "https://localhost:7004/api/UserProfile/";
  constructor(private http : HttpClient) { }

  getUser(userId  : string){
    return this.http.get(this.apiUrl+userId);
  }

  updateUser (userId : string , user:any){
    return this.http.put(this.apiUrl+userId,user);
  }


}
