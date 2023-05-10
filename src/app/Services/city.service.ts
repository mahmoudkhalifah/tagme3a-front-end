import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})

// https://localhost:7004/api/Cities

export class CityService {

  constructor(private Client:HttpClient ) { }
  private URL=Constants.apiBaseUrl;

  getAllCities()
  {
    return this.Client.get(this.URL+'/Cities');
  }

}
