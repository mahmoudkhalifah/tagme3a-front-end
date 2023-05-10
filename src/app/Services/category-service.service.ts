import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryDTO } from '../Models/CategoryDTO';
import { CategoryInsert } from '../Models/CategoryInsertDTO';
import { Constants } from '../constants/constants';


@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  constructor(private client:HttpClient) { }
  private URL = Constants.apiBaseUrl+"Categories";
  /*
  getPeople(): Observable<Person[]> {
    console.log('getPeople '+this.baseURL + 'people')
    return this.http.get<Person[]>(this.baseURL + 'people')
  }
  */
  getAllCategories()
  {
    return this.client.get<CategoryDTO[]>(this.URL);
  }
  getProductsWithCategories(id:any)
  {
    return this.client.get(this.URL+'/CategoriesWithPrds/'+id);
  }
  getCategoryById(id:any)
  {
    return this.client.get(this.URL+'/'+id);
  }
  updateCategoryById(id:any,category:any)
  {
    return this.client.put<CategoryInsert>(this.URL+'/'+id,category);
  }
  deleteCategoryById(id:any)
  {
    return this.client.delete(this.URL+'/'+id);
  }
  addCategory<CategoryInsert>(category:CategoryInsert)
  {
    return this.client.post(this.URL,category);
  }
}
