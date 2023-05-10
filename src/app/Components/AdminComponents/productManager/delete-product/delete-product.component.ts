import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  Id:any
  product:any
  canNotDelete=false;

  constructor(private appComponent: AppComponent,activate:ActivatedRoute,private service:ProductService,private router: Router)
  {
    appComponent.showFooter = false;
    this.Id = activate.snapshot.params["id"];
    this.product = service.getProductByID(this.Id).subscribe({
      next:(data)=>
      {
        this.product = data;
console.log(this.product);
      },
      error:(error)=>{
    console.log(error)
      }
    });
  console.log(this.product);

  }
  Delete()
  {
    this.service.deleteProductbyID(this.Id).subscribe({
      next:()=>{
        this.router.navigate(["admin/dashboard"])
      },
      error:(err)=>{
        if(err.status==400) {
          this.canNotDelete = true;
        }
      }
    });
  }

}
