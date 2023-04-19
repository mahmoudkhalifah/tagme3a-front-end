import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  Id:any;
  product :any;
  constructor(private appComponent: AppComponent, myActivated:ActivatedRoute , private productService: ProductService) {
    appComponent.showFooter = false;
    appComponent.showNavbar =false;

    this.Id = myActivated.snapshot.params["id"];

  }
  ngOnInit(): void {
    this.productService.getProductByID(this.Id).subscribe({
      next:(data)=>{
        this.product = data;
      },
      error:(err)=>{console.log(err)},
    })
  }


}
