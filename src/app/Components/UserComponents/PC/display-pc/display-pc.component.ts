import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PCReadDTO } from 'src/app/Models/PCReadDTO';
import { PCServiceService } from 'src/app/services/pcservice.service';
import { AppComponent } from 'src/app/app.component';
import { BasketService } from 'src/app/services/basket.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserPCInCartInsertDTO } from 'src/app/Models/UserPCInCartInsertDTO';

@Component({
  selector: 'app-display-pc',
  templateUrl: './display-pc.component.html',
  styleUrls: ['./display-pc.component.css']
})
export class DisplayPCComponent implements OnInit{
  PCs:PCReadDTO[]=[];
  // pc:any;
  // product: any = {}; // add product property here


  constructor(private appComponent:AppComponent , myactivate:ActivatedRoute 
    , private myService :PCServiceService ,private basketService:BasketService , private auth:UserAuthService){
    appComponent.showFooter = false;
  }
ngOnInit(): void {
  this.myService.getAllPCs().subscribe({
    next:(data)=>{
      this.PCs = data;
      console.log(data);
    },
    error:(err)=>{
      console.log(err);
    }
  });

  
}
}
// isLoading = false;
// Mylist:Array<UserPCInCartInsertDTO> =[];

// id:any = this.auth.getUserId()
// selectedProductId: any;

// addToCart(id: any) {
//   this.isLoading = true;
//   this.selectedProductId = id; // set the selected product ID
//   this.myService.getPCById(id).subscribe({
//     next: (data) => {
//       this.pc = data;
//       this.addProductsToCart();
//     },
//     error: (err) => {
//       console.log(err);
//     }
//   });

// }

// addProductsToCart() {

//   if (this.pc && this.pc.products) {
//     if(this.pc.products.length ==0) console.log("couldn't add");
//     let userPcList: UserPCInCartInsertDTO[] = [];

//     for (let product of this.pc.products) {
//       let userPc: UserPCInCartInsertDTO = {
//         productId: product.productId,
//         quantity: product.quantitiy
//       };
//       userPcList.push(userPc);
//     }

//     console.log(userPcList);

//     this.basketService.AddLstProductInCart(userPcList, this.id).subscribe({
//       next: () => {
//         this.isLoading = false;
//         //for (let product of this.pc.products) {
//           this.pc.addedToCart = true;
//         //}
//       },
//       error: (err) => {
//         console.log(err);
//       }
//     });

//   } else {
//     console.log('Unable to add items to cart. Products are undefined.');
//   }
// }}
