import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private ApiUrl = "https://localhost:7004/api/Search/"

  constructor(private http : HttpClient) {

   }
   getAllPrds(productName:string)
   {
     return this.http.get(this.ApiUrl+productName);
   }
}
