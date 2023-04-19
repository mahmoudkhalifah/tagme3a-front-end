import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Product } from '../../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  products : any;
  constructor(private appComponent: AppComponent , private productService : ProductService) {
    appComponent.showFooter = false;
    appComponent.showNavbar = false;

    
  }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      {
        next:(data)=>{
          //console.log(data)
          this.products = data;
        },
        error:(err)=>{console.log(err)}
      }
    );
  }

  deleteProduct(id: number) {
    this.productService.deleteProductbyID(id)
      .subscribe(() => {
        if (this.products) {
          this.products = this.products.filter((product: { id: number; }) => product.id !== id);
        }
      });
  }
}
