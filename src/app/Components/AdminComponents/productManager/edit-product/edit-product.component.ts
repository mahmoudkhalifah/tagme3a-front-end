import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../../models/product';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id :any;
  product! : Product;

  constructor(private productService: ProductService,
      private appComponent : AppComponent,
      private route: ActivatedRoute,
      private router:Router) { 
        appComponent.showFooter = false;
        appComponent.showNavbar = false;
        // this.id=route.snapshot.params['id'];
      }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductByID(this.id).subscribe(
      data => {
        this.product = data;
      },
      error => console.log(error)
    );
  }

  onSubmit(){
    this.productService.EditProduct(this.id, this.product).subscribe(
      data => {
        this.router.navigate(['/products']);
      },
      error => console.log(error)
    );
  }

  }

