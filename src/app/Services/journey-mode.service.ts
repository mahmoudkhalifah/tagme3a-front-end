import { Injectable } from '@angular/core';
import { Constants } from '../constants/constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JourneyModeService {
  url = Constants.apiBaseUrl+"JourneyMode/";
  constructor(private httpClient:HttpClient) { }

  getCategories() : Observable<any> {
    return this.httpClient.get(this.url+"getCategories")
  }

  getProducts(id:number,maxPrice:number) : Observable<any> {
    return this.httpClient.get(this.url+`getCategoriesWithProductsByPrice/${id}?maxPrice=${maxPrice}`)
  }
}
