import { Component } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
import { AppComponent } from 'src/app/app.component';
import { UserUpdateCart } from 'src/app/Models/UserUpdateCart';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
})
export class BasketComponent {
  constructor(private router:Router,private appComponent: AppComponent,private basket:BasketService,private auth:UserAuthService){
    appComponent.showFooter = false;
    appComponent.showNavbar = true;
    appComponent.adminNavbar = false;
  }
  data:any
  Total:number=0
  sum:number=0

  id=this.auth.getUserId()
  ngOnInit(): void {

      this.basket.GetUserCartPrdName(this.id).subscribe(
        {
          next:(Items)=>{this.data=Items},
          error:(err)=>{console.log(err)}
        }
      )

  }
  Save(quantity:number,pid:number,unitInStocks:number,prdname:any)
  {

  if(quantity>unitInStocks || unitInStocks==0)
  {
      alert("UnitInstock In"+prdname+"Not Enough")
  }
  else
  {
    let Update=new UserUpdateCart(pid,this.id,quantity);

    this.basket.UpdateCart(this.id,pid,Update).subscribe(
      {
        next:()=>{ },
      }
    )
  }
  }
  Remove(pid:number,i:number)
  {
    this.basket.DeleteItemInCart(this.id,pid).subscribe(
    {
    next:()=>{
      this.data.splice(i,1);
      this.router.navigate(["/User/ManageBasket/basket"])
      }
    }
  );
  }
  get TotalPrice()
  {
    let sum = 0;
    if(this.data!=undefined)
    {
      for (let i = 0; i < this.data.length; i++) {
        sum += (this.data[i].price - this.data[i].discount||0) * this.data[i].quantity;
      }
    this.Total=sum;
    }
    console.log(this.Total)
    return sum
  }

}
