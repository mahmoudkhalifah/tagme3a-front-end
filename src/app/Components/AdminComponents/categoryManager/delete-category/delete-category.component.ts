import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent {
  Id:any
  category:any
  canNotDelete = false;
  constructor(private appComponent: AppComponent,activate:ActivatedRoute,private service:CategoryServiceService,private router: Router)
  {
    appComponent.showFooter = false;
    this.Id = activate.snapshot.params["id"];
    this.category = service.getCategoryById(this.Id).subscribe({
      next:(data)=>
      {
        this.category = data;

      },
      error:(error)=>{
        console.log(error)
      }
    });
  console.log(this.category);

  }
  Delete()
  {
        this.service.deleteCategoryById(this.Id).subscribe(
          {
            next:()=>{
              this.router.navigate(["admin/categoryManager/view-categories"])
            },
            error:(err)=>{
              if(err.status == 400)
                this.canNotDelete = true;
            }
          }
        );
  }
}
