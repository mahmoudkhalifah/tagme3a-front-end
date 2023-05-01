import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{
  constructor(private userAuthService:UserAuthService, public basketService:BasketService) {}
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
  }

}
