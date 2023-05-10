import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryDTO } from 'src/app/Models/CategoryDTO';
import { CategoryServiceService } from'src/app/services/category-service.service';
import { AppComponent } from 'src/app/app.component';
import 'owl.carousel';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  carouselOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  };
  categories:CategoryDTO[]=[];
  constructor(private appComponent: AppComponent,myActivate:ActivatedRoute,private myService:CategoryServiceService , private router: Router) {
    appComponent.showFooter = true;
    appComponent.showNavbar = true;
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

