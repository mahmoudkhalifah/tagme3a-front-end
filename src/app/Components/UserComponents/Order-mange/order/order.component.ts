import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { OrderService } from 'src/app/services/order.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'})
export class OrderComponent implements OnInit {
  id:any
  orders:any

  constructor(private appComponent:AppComponent,  private service:OrderService,router:ActivatedRoute,private userAuth:UserAuthService){
    this.id=userAuth.getUserId()
    appComponent.showFooter = false;
    appComponent.showNavbar = true;
    appComponent.adminNavbar = false;
  }
  ngOnInit(): void {
    this.service.getOrderByUserID(this.id).subscribe(
      {
       next:(data)=>{this.orders=data
      console.log(data)},
       error:(err)=>{console.log(err)}
      }
    );
  }


}
