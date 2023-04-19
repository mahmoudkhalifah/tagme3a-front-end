import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

import { Product, ProductImage } from '../../models/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  
  productData : Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    discount: 0,
    unitInStocks: 0,
    productImages: [],
    categoryID: 0,
    brandID: 0
  };

  constructor(private appComponent: AppComponent, private productService: ProductService) {
    appComponent.showFooter = false;
    appComponent.showNavbar =false;

    
    
  }
  AddProduct(productData : Product) {
    this.productService.AddProduct(productData).subscribe(
      ()=>{
        console.log(`Created product with ID ${productData.id}`);
      },
      error => {
        console.log(`Error creating product: ${error.message}`);
      }
    )
}
handleUpload(event:any) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    var res = reader.result;
    // this.productData.productImages[0]. = res;
    };
  }
}
