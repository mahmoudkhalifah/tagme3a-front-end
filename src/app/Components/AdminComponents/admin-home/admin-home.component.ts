import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  constructor(private appComponent: AppComponent) {
    appComponent.showFooter = false;
    appComponent.showNavbar = false;
    appComponent.adminNavbar = true;


    
  }
}
