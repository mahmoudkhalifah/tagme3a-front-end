import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// https://localhost:7004/api/Cities

export class CityService {

  constructor(private Client:HttpClient ) { }
  private URL="https://localhost:7004/api";

  getAllCities()
  {
    return this.Client.get(this.URL+'/Cities');
  }

}
