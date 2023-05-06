import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent   {
  brands : any
  constructor(private myService:BrandService , private footer : AppComponent)
  {
    footer.showFooter = true;

  }

  ngOnInit(): void {
    this.myService.getAllBrands().subscribe
    ({
        next:(data)=>{
          this.brands = data;
        },
        error:(err)=>{console.log(err)}
      });
   }

}
