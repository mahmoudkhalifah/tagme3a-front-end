import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrandDTO } from '../Models/BrandDTO';
import { BrandInsert } from '../Models/BrandInsertDTO';

@Injectable({
  providedIn: 'root'
})

export class BrandService {

  constructor(private client:HttpClient) { }
  private URL = "https://localhost:7004/api/Brands";

  getAllBrands()
  {
    return this.client.get<BrandDTO[]>(this.URL);
  }
  getBrandById(id:any)
  {
    return this.client.get(this.URL+'/'+id);
  }
  updateBrandById(id:any,brand:any)
  {
    console.log(brand);
    return this.client.put<BrandInsert>(this.URL+'/'+id,brand);
  }
  deleteBrandById(id:any)
  {
    return this.client.delete(this.URL+'/'+id);
  }
  addBrand<BrandInsert>(brand:BrandInsert)
  {
    return this.client.post(this.URL,brand);
  }
}
