import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(private appComponent : AppComponent , private userAuthService:UserAuthService , private router:Router) {
    appComponent.adminNavbar = false;
    appComponent.showFooter = false;
    appComponent.showNavbar = false;
  }
  showDashboardComponent: boolean = true;
  showProductComponent = false;
  showbrandComponent = false;
  showCategoryComponent : boolean = false;
  showOrderComponent : boolean = false;
  showPcComponent : boolean = false;


  toggleProductComponent() {
    this.showProductComponent = !this.showProductComponent;
  }
  togglebrandComponent() {
    this.showbrandComponent = !this.showbrandComponent;
  }
  toggleCategoryComponent() {
    this.showCategoryComponent = !this.showCategoryComponent;
  }
  toggleOrderComponent() {
    this.showOrderComponent = !this.showOrderComponent;
  }
  togglePcComponent() {
    this.showPcComponent = !this.showPcComponent;
  }


  onLogout() {
    this.userAuthService.logout();
    this.router.navigateByUrl('/login');
  }
}
