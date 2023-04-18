import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
})
export class ShowDetailsComponent  implements OnInit{

  orders:any
  id:any
  constructor(private service:OrderService,myActivated:ActivatedRoute){
    this.id=myActivated.snapshot.params["id"];
  }
  ngOnInit(): void {
     this.service.getMoreDetails(this.id).subscribe(
      {
        next:(data)=>{
          this.orders=data;
        }
        , error:(err)=>{console.log(err)}

      }
     )
  }

}
