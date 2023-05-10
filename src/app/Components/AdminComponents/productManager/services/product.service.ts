import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { catchError, throwError } from 'rxjs';
import { Constants } from 'src/app/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private apiUrl = Constants.apiBaseUrl+"Product" //Api URL
  constructor(private readonly http : HttpClient ) { }

  getAllProducts(){
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError(this.handleError))
    }
    getAllProductsAdmin(){
      return this.http.get<Product[]>("https://localhost:7004/api/Product/admin/products").pipe(
        catchError(this.handleError))
      }

   getAllProductsWithBrandAndCat(brandId?:number,categoryId?:number)
   {
    let params = new HttpParams();
    if(brandId)params=params.append("brandId",brandId);
    if(categoryId)params=params.append("categoryId",categoryId);
    return this.http.get<Product[]>(this.apiUrl+'/catbrandprds',{params:params}).pipe(
      catchError(this.handleError))
   }
  AddProduct(product : Product){
    return this.http.post<Product[]>(this.apiUrl , product).pipe(
      catchError(this.handleError))
  }

  getProductByID(id:any){
    return this.http.get(this.apiUrl+'/'+id);
  }

  deleteProductbyID(id : any){
    return this.http.delete(this.apiUrl+"/"+id);
  }


  EditProduct(id:any,product:Product){
    return this.http.put(this.apiUrl+"/"+id,  product);
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something went wrong; please try again later.');
  }


}
