import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryDTO } from 'src/app/Models/CategoryDTO';
import { CategoryServiceService } from 'src/app/Services/category-service.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories:CategoryDTO[]=[];
  constructor(private appComponent: AppComponent,myActivate:ActivatedRoute,private myService:CategoryServiceService) {
    appComponent.showFooter = true;
    appComponent.showNavbar = true;
    appComponent.adminNavbar = false;
  }
  ngOnInit(): void {
    this.myService.getAllCategories().subscribe
    ({
        next:(data)=>{
          this.categories = data;
       //   console.log(this.categories);
        },
        error:(err)=>{console.log(err)}
      });
   }
}
