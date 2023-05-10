import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PCServiceService } from 'src/app/services/pcservice.service';
import { AppComponent } from 'src/app/app.component';
import { UserPCInCartInsertDTO } from 'src/app/Models/UserPCInCartInsertDTO';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-details-pc',
  templateUrl: './details-pc.component.html',
  styleUrls: ['./details-pc.component.css']
})
export class DetailsPCComponent implements OnInit{

  Id:any;
  pc:any;
  added:boolean = false;
  alreadyAdded:boolean = false;

  constructor(private appComponent:AppComponent ,private basketService:BasketService  , private auth:UserAuthService ,myactivate:ActivatedRoute , private myService :PCServiceService){
    appComponent.showFooter = true;
    appComponent.showNavbar= true;
    this.Id = myactivate.snapshot.params["id"];

  }

  ngOnInit(): void {
    this.myService.getPCById(this.Id) .subscribe({
      next:(data)=>{
        this.pc = data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  isLoading = false;
  Mylist:Array<UserPCInCartInsertDTO> =[];

  id:any = this.auth.getUserId()
  selectedProductId: any;

  addToCart(id: any) {
    this.isLoading = true;
    this.selectedProductId = id; // set the selected product ID
    this.addProductsToCart();
      
  }

  addProductsToCart() {

    if (this.pc && this.pc.products) {
      if(this.pc.products.length ==0) console.log("couldn't add");
      let userPcList: UserPCInCartInsertDTO[] = [];

      for (let product of this.pc.products) {
        let userPc: UserPCInCartInsertDTO = {
          productId: product.productId,
          quantity: product.quantitiy
        };
        userPcList.push(userPc);
      }

      console.log(userPcList);

      this.basketService.AddLstProductInCart(userPcList, this.id).subscribe({
        next: () => {
          this.isLoading = false;
          //for (let product of this.pc.products) {
            this.pc.addedToCart = true;
            this.added= true;
          //}
        },
        error: (err) => {
          console.log(err);
          if(err.status==500)
          this.alreadyAdded= true;
        }
      });

    } else {
      console.log('Unable to add items to cart. Products are undefined.');
    }
  }

}
