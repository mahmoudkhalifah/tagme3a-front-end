import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-delete-brand',
  templateUrl: './delete-brand.component.html',
  styleUrls: ['./delete-brand.component.css']
})
export class DeleteBrandComponent {
  Id:any
  brand:any
  constructor(private appComponent: AppComponent,activate:ActivatedRoute,private service:BrandService,private router: Router)
  {
    appComponent.showFooter = false;
    this.Id = activate.snapshot.params["id"];
    this.brand = service.getBrandById(this.Id).subscribe({
      next:(data)=>
      {
        this.brand = data;

      },
      error:(error)=>{
    console.log(error)
      }
    });
  console.log(this.brand);

  }
  Delete()
  {
    this.service.deleteBrandById(this.Id).subscribe({
      next:()=>{
        this.router.navigate(["admin/dashboard"])
      },
      error:(err)=>{console.log(err)}
    });
  }

}
