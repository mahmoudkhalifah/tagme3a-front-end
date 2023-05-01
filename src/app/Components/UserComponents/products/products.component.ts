import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandDTO } from 'src/app/Models/BrandDTO';
import { CategoryDTO } from 'src/app/Models/CategoryDTO';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { AppComponent } from 'src/app/app.component';
import { ProductService } from '../../AdminComponents/productManager/services/product.service';
import { BasketService } from 'src/app/services/basket.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import {UserProductInCartInsert } from 'src/app/Models/UserProductInCartInsertDTO';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  brands:BrandDTO[]=[];
  categories:CategoryDTO[]=[];
  products:any;
  brandIdSelected=0;
  categoryIdSelected=0;
  userID:any;
  constructor(private route: ActivatedRoute, private router: Router,  private auth:UserAuthService,private appComponent: AppComponent,myActivate:ActivatedRoute,private brandService:BrandService,private catgeoryService:CategoryServiceService,private productServcie:ProductService,private basketService:BasketService) {
    appComponent.showFooter = true;
    appComponent.showNavbar = true;
    appComponent.adminNavbar = false;
  }
  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getCategories();
    this.userID= this.auth.getUserId()
   }
  public ShowPrds(Id:any)
   {
    console.log(Id);
   }
   getCategories()
   {
    this.catgeoryService.getAllCategories().subscribe
    ({
        next:(data)=>{
          this.categories = [{categoryId:0,name:"All",description:"",image:""},...data];
          console.log(this.categories);
        },
        error:(err)=>{console.log(err)}
      });
   }
   getBrands()
   {
    this.brandService.getAllBrands().subscribe
    ({
        next:(data)=>{
          this.brands = [{brandId:0,name:"All",description:"",logo:""},...data];
          console.log(this.brands);
        },
        error:(err)=>{console.log(err)}
      });
   }
   onBrandSelected(brandId:number)
   {
    this.brandIdSelected=brandId;
    this.getProducts();
   }
   onCategorySelected(cateogoryId:number)
   {
    this.categoryIdSelected=cateogoryId;
    this.getProducts();
   }
   getProducts(){
    console.log(this.brandIdSelected);
    console.log(this.categoryIdSelected);
    if(this.brandIdSelected == 0 && this.categoryIdSelected == 0)
    {
      this.productServcie.getAllProducts().subscribe
      ({
        next:(data)=>{
          this.products = data;
          console.log(this.products);
        },
        error:(err)=>{console.log(err)}
      });
    }
    else if(this.brandIdSelected == 0 && this.categoryIdSelected !=0)
    {
      this.catgeoryService.getProductsWithCategories(this.categoryIdSelected).subscribe
      ({
        next:(data)=>{
          this.products = data;
          this.products = this.products.products;
          console.log(this.products);
        },
        error:(err)=>{console.log(err)}
      });
    }
    else if (this.brandIdSelected != 0 && this.categoryIdSelected == 0)
    {
      this.brandService.getProductsWithBrands(this.brandIdSelected).subscribe
      ({
        next:(data)=>{
          this.products = data;
          this.products = this.products.products;
          console.log(this.products);
        },
        error:(err)=>{console.log(err)}
      });
    }
    else {
this.productServcie.getAllProductsWithBrandAndCat(this.brandIdSelected,this.categoryIdSelected).subscribe
({
  next:(data)=>{
    this.products = data;
    console.log(this.products);
  },
  error:(err)=>{console.log(err)}
});
    }
   }

   Insert(id:any)
   {
    let User="1ed81e79-9a3b-4910-9167-5e80e3b7f613";
    let prd = new UserProductInCartInsert(+id,this.userID,1);
    this.basketService.AddProductInCart(prd).subscribe(
      {
        error:(err)=>{console.log(err)}
      }
    );
    console.log(id)
   }
}
