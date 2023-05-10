import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Components/AdminComponents/productManager/services/product.service';
import { BrandService } from 'src/app/services/brand.service';
import { AppComponent } from 'src/app/app.component';
import { CategoryServiceService } from 'src/app/services/category-service.service';

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
