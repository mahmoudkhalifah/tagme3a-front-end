import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchQuery!: string;
  constructor(public userAuthService:UserAuthService , private router : Router) {

  }
  onLogout() {
    this.userAuthService.logout();
  }
  SearchQuery(){
    if (this.searchQuery) {
      this.router.navigate(['/search', this.searchQuery]);
    }
}
}
