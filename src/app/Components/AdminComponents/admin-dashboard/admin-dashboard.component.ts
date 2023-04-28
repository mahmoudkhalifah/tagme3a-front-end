import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(private appComponent : AppComponent) {
    appComponent.adminNavbar = false;
    appComponent.showFooter = false;
    appComponent.showNavbar = false;
  }
}
