import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {UserProductInCartInsert } from '../Models/UserProductInCartInsertDTO';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private Client:HttpClient ) { }
  private URL="https://localhost:7004/api";

  GetDetailsOfCartForSpecificUser(UserId:string)
  {
     this.Client.get(this.URL+'/UserProducstInCart?UserId='+UserId);
  }
  AddProductInCart<UserProductInCartInsert>(Cart:UserProductInCartInsert)
  {
    return this.Client.post(this.URL+'/UserProducstInCart',Cart);
  }
  DeleteProductInCart(UserId:string,ProductId :number)
  {
    return this.Client.delete(this.URL+' /UserProducstInCart/'+UserId+'/'+ProductId);
  }


}
