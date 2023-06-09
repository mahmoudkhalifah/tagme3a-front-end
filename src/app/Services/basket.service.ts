import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {UserProductInCartInsert } from 'src/app/Models/UserProductInCartInsertDTO';
import { UserUpdateCart } from '../Models/UserUpdateCart';
import { uid } from 'chart.js/dist/helpers/helpers.core';
import { Constants } from '../constants/constants';



@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private Client:HttpClient ) { }
  private URL=Constants.apiBaseUrl;

  GetDetailsOfCartForSpecificUser(UserId:string)
  {
    return  this.Client.get(this.URL+'UserProducstInCart?UserId='+UserId);
  }

  AddProductInCart<UserProductInCartInsert>(Cart:UserProductInCartInsert)
  {
    return this.Client.post(this.URL+'UserProducstInCart',Cart);
  }


  AddLstProductInCart(prd:any , UId :any)
  {
    return this.Client.post(this.URL+'UserProducstInCart/'+UId,prd);
  }

  DeleteProductInCart(UserId:string,ProductId :number)
  {
    return this.Client.delete(this.URL+'UserProducstInCart/'+UserId+'/'+ProductId);
  }

  GetUserCartPrdName(UserId:string)
  {
    return this.Client.get(this.URL+'UserProducstInCart/GetUserCartPrdName?UserId='+UserId)
  }
  UpdateCart(UserId:string,PID:Number,cartUpdate:UserUpdateCart)
  {
    //https://localhost:7004/api/UserProducstInCart/UpdateCard?PID=15&UID=7c1b7ab9-1cbb-4ea7-b7ae-ddff5b5487e3

    return this.Client.put(this.URL+"UserProducstInCart/UpdateCard?PID="+PID+"&UID="+UserId,cartUpdate);
  }
  DeleteItemInCart(UserId:string,PID:Number)
  {
    //https://localhost:7004/api/UserProducstInCart/57c32c65-477b-4a4a-99bd-e04f04904aef/3'
    return this.Client.delete(this.URL+"UserProducstInCart/"+UserId+"/"+PID);
  }

  DeleteCart(UserId:string)
  {
    return this.Client.delete(this.URL+"UserProducstInCart/DeleteCarts?UID="+UserId);
  }
  // https://localhost:7004/api/UserProducstInCart/DeleteCarts?UID=1ed81e79-9a3b-4910-9167-5e80e3b7f613

}
