import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute } from '@angular/router';
import { CategoryDTO } from '../../../../Models/CategoryDTO';
import { Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/Services/category-service.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories:CategoryDTO[]=[];
  constructor(private appComponent: AppComponent,myActivate:ActivatedRoute,private myService:CategoryServiceService) {
    appComponent.showFooter = false;

  }
  ngOnInit(): void {
   this.myService.getAllCategories().subscribe
   ({
       next:(data)=>{
         this.categories = data;
         console.log(this.categories);
       },
       error:(err)=>{console.log(err)}
     });
  }

}
