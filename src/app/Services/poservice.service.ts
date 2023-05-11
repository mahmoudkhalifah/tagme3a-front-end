import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class POserviceService {

  constructor(private Client:HttpClient ) { }
  private URL=Constants.apiBaseUrl;

  AddProductOrder(UserId:string)
  {
    return  this.Client.post(this.URL+'ProductOrder/AddProductOrder?UID='+UserId,null);
  }

}

// https://localhost:7004/api/ProductOrder/AddProductOrder?UID=7c1b7ab9-1cbb-4ea7-b7ae-ddff5b5487e3
