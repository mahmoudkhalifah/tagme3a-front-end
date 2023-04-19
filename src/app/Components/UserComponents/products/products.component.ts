import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private appComponent: AppComponent) {
    appComponent.showFooter = true;
    appComponent.showNavbar = true;
    appComponent.adminNavbar = false;
  }

}
