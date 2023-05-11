import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{PostOrder} from '../Models/PostOrderDTO'
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private Client:HttpClient ) { }
  private URL=Constants.apiBaseUrl;

  getAllOrders()
  {
    return this.Client.get(this.URL+'Order');
  }
  //OrderCityNameproducts
  getMoreDetails(id:any)
  {
    return this.Client.get(this.URL+'Order/OrderCityNameproducts?id='+id)
  }
  //admin Update
  UpdateOrderByID(id :any,orderUpdate:any)
  {

   return this.Client.put(this.URL+'Order?id='+id,orderUpdate);
  }

  //By User ID
  getOrderByUserID(id:string)
  {
    return this.Client.get(this.URL+'Order/OrderByUserID?ID='+id);
  }

  //https://localhost:7004/api/Order/GetOrderByID?id=2

  getOrderByOrderID(id:number)
  {
    return this.Client.get(this.URL+'Order/GetOrderByID?id='+id);
  }

  PostOrder<PostOrder>(order:PostOrder){
    return this.Client.post(this.URL+'Order',order);
  }

  // https://localhost:7004/api/Order/OrderByUserID?ID=3e080e3d-ee13-471a-8b73-415d3139d7ac

  // https://localhost:7004/api/Order/GetWithProduct?id=46

  GetProductUserDetails(ID:number){
    return this.Client.get(this.URL+'Order/GetWithProduct?id='+ID);
  }
}


