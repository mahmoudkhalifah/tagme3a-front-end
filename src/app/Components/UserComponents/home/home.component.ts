import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private appComponent: AppComponent) {
    appComponent.showFooter = true;
    appComponent.showNavbar = true;
    appComponent.adminNavbar = false;


    
  }

}
