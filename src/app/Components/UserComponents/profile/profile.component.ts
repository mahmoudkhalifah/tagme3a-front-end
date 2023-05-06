import { Component } from '@angular/core';
import { UserLogin } from 'src/app/models/user-login';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  Email : any
  constructor(private userAuth : UserAuthService) {}
  

}
