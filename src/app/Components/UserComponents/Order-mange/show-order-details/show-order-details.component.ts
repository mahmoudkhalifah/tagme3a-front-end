import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-show-order-details',
  templateUrl: './show-order-details.component.html'
})
export class ShowOrderDetailsComponent  implements OnInit {
  id:any
  data:any
constructor( private appComponent:AppComponent,  private  OrderService:OrderService,myActivated:ActivatedRoute)
    {
      appComponent.showFooter = true;
      appComponent.showNavbar = true;
      this.id=myActivated.snapshot.params["id"];
    }
ngOnInit(): void
  {
     this.OrderService.GetProductUserDetails(this.id).subscribe(
      {

      next:(items)=>{
        this.data=items
      },
      error:(err)=>{console.log(err)}

      }
     );
  }

}
