import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showFooter: boolean = true;
  showNavbar: boolean = true;
  adminNavbar: boolean = true;

  title = 'angularapp';
}