import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private Client:HttpClient ) { }
  private URL="https://localhost:7004/api";

  getAllOrders()
  {
    return this.Client.get(this.URL+'/Order');
  }
  //OrderCityNameproducts
  getMoreDetails(id:any)
  {
    return this.Client.get(this.URL+'/Order/OrderCityNameproducts?id='+id)
  }
  //admin Update
  UpdateOrderByID(id :any,orderUpdate:any)
  {

   return this.Client.put(this.URL+'/Order?id='+id,orderUpdate);
  }

  //By User ID
  getOrderByUserID(id:string)
  {
    return this.Client.get(this.URL+'/Order/OrderByUserID?ID='+id);
  }

  //https://localhost:7004/api/Order/GetOrderByID?id=2

  getOrderByOrderID(id:number)
  {
    return this.Client.get(this.URL+'/Order/GetOrderByID?id='+id);
  }


}


