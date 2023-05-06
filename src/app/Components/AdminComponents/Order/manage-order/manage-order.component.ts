import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html'})
export class ManageOrderComponent implements OnInit {
  id:any
  order:any
   constructor(private service:OrderService , ACtivatedroute:ActivatedRoute,private router:Router){
      this.id=ACtivatedroute.snapshot.params['id'];
   }

  ngOnInit(): void
  {
    this.service.getOrderByOrderID(this.id).subscribe(
      {
        next:(data)=>{this.order=data;},
        error:(err)=>{console.log(err);}
      }
    )
  }



  Upadte(id:any,userId:any,addressID:any,shippingDate:any,orderDate:any,payMethod:any,arrivalDate:any,bill:any,orderState:any)
  {
        payMethod=1
    if (orderState === "1") {
      orderState = 1;
    } else {
      orderState = 2;
    }

    let UPdatedOrder={id,userId,addressID,shippingDate,arrivalDate,orderDate,payMethod,bill,orderState};
    this.service.UpdateOrderByID(id,UPdatedOrder).subscribe(
      {

        next:()=>{
          this.router.navigate(["admin/dashboard"])
        },
        error:(err)=>{console.log(err)}

      }
    );

  }


}
