import { Component } from '@angular/core';
import { BrandDTO } from '../../../../Models/BrandDTO';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-view-brands',
  templateUrl: './view-brands.component.html',
  styleUrls: ['./view-brands.component.css']
})
export class ViewBrandsComponent {
  brands:BrandDTO[]=[];
  constructor(private appComponent: AppComponent,myActivate:ActivatedRoute,private myService:BrandService) {
    appComponent.showFooter = false;

  }
  ngOnInit(): void {
   this.myService.getAllBrands().subscribe
   ({
       next:(data)=>{
         this.brands = data;
         console.log(this.brands);
       },
       error:(err)=>{console.log(err)}
     });
  }

}
