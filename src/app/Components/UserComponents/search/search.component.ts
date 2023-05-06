import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ProductService } from '../../AdminComponents/productManager/services/product.service';
import { Product } from '../../AdminComponents/models/product';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  products!:Product ;
  searchQuery!: string;
  searchResults!: any;
  constructor(private appComponent: AppComponent,private router:Router,private route:ActivatedRoute,private SearchService:SearchService) {
    appComponent.showFooter = true;
    appComponent.showNavbar = true;
    appComponent.adminNavbar = false;
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.searchQuery = params['query'];
      this.SearchService.getAllPrds(this.searchQuery)
        .subscribe(results => {
          this.searchResults = results;
          console.log(results);
          
        });
    });
   }

  getDetails(id:any)
  {
   console.log(id);
   //src\app\Components\UserComponents\products\product-details\product-details.component.html
   this.router.navigate(["home-product-details/"+id])
  }

}
