import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'})
export class OrderComponent implements OnInit {
  id:any
  orders:any
  constructor(private service:OrderService,router:ActivatedRoute){
    this.id=router.snapshot.params['ID'];
  }
  ngOnInit(): void {
    this.service.getOrderByUserID(this.id).subscribe(
      {
       next:(data)=>{this.orders=data},
       error:(err)=>{console.log(err)}
      }
    );
  }


}
