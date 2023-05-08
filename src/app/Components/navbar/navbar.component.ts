import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent  implements OnInit{
  searchQuery!: string;
  constructor(public userAuthService:UserAuthService, public basketService:BasketService , private router : Router) {}
  data:any=0
  id=this.userAuthService.getUserId()
  ngOnInit(): void {
    this.basketService.GetUserCartPrdName(this.id).subscribe(
      {
        next:(Items)=>{this.data=Items},
        error:(err)=>{console.log(err)}
      }
    )
  }
  onLogout() {
    this.userAuthService.logout();
    this.router.navigate(["/login"]);
  }
  SearchQuery(){
    if (this.searchQuery) {
      this.router.navigate(['/search', this.searchQuery]);
    }
}
}
