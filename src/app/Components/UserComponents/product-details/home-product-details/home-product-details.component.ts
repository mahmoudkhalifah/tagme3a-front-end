import { UserAuthService } from 'src/app/services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Components/AdminComponents/productManager/services/product.service';
import { BrandService } from 'src/app/services/brand.service';
import { AppComponent } from 'src/app/app.component';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { BasketService } from 'src/app/services/basket.service';
import { UserProductInCartInsert } from 'src/app/Models/UserProductInCartInsertDTO';

@Component({
  selector: 'app-home-product-details',
  templateUrl: './home-product-details.component.html',
  styleUrls: ['./home-product-details.component.css']
})
export class HomeProductDetailsComponent implements OnInit{
  product:any
  id:any
    constructor(private productServcie:ProductService,private basketService:BasketService,private productService:ProductService,private router:Router,private userAuthService:UserAuthService,private appComponent: AppComponent,private route:ActivatedRoute,private brandService:BrandService,private catgeoryService:CategoryServiceService)
  {
    appComponent.showFooter = true;
    appComponent.showNavbar = true;
    appComponent.adminNavbar = false;
  }
  ngOnInit(): void {
   this.getProduct();
  }
  getProduct()
  {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductByID(this.id).subscribe
        ({
          next:(data)=>{
            this.product = data;
            //this.products = this.products.products;
            console.log(this.product);
          },
          error:(err)=>{console.log(err)}
        });
  }
  added = false;
  alreadyAdded = false;
  Insert()
   {
    this.added=false;
    this.alreadyAdded=false;
    if(!this.userAuthService.getUserId()) {
      this.router.navigate(["/login"]);
      return;
    }

    let prd = new UserProductInCartInsert(+this.id,this.userAuthService.getUserId(),1);
    this.basketService.AddProductInCart(prd).subscribe(
      {
        next:()=>
        {
          this.added = true;
        },
        error:(err)=>{
          console.log(err.status);
          if(err.status == 400){
            this.alreadyAdded = true
        //   alert("Product Already In Cart");
          }
        }
      }
    );
   }
}



