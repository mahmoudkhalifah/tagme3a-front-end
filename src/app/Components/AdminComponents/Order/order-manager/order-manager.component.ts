import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
})
export class OrderManagerComponent implements OnInit {
   constructor (private service:OrderService){}
   Orders:any
  ngOnInit(): void {

    this.service.getAllOrders().subscribe(
      {
        next:(response)=>{this.Orders=response},
        error:(err)=>{console.log(err)}
      }
    )
  }


}
