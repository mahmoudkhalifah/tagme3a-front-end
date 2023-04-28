import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Components/AdminComponents/productManager/services/product.service';
import { BrandService } from 'src/app/Services/brand.service';
import { CategoryServiceService } from 'src/app/Services/category-service.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home-product-details',
  templateUrl: './home-product-details.component.html',
  styleUrls: ['./home-product-details.component.css']
})
export class HomeProductDetailsComponent implements OnInit{
  product:any
  id:any
    constructor(private productService:ProductService,private appComponent: AppComponent,private route:ActivatedRoute,private brandService:BrandService,private catgeoryService:CategoryServiceService)
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
}