import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private ApiUrl = Constants.apiBaseUrl+"Search/"

  constructor(private http : HttpClient) {

   }
   getAllPrds(productName:string)
   {
     return this.http.get(this.ApiUrl+productName);
   }
}
