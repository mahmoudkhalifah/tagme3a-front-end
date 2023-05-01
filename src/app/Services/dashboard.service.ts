import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private client : HttpClient) { }
  URL = "https://localhost:7004/api/Dashboard";

  getNumOfProducts(){
    return this.client.get(this.URL+"/NumOfProducts");
  }
  getNumOfOrders(){
    return this.client.get(this.URL+"/NumOfOrders");
  }

  getNumOfCategories(){
    return this.client.get(this.URL+"/NumOfCategories");
  }
  getTotalEarnings(){
    return this.client.get(this.URL+"/TotalEarnings");
  }
}
