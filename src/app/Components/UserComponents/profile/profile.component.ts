import { Component } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user : any
  constructor(private userAuth : UserAuthService , private profileService : UserProfileService) {}

  ngOnInit(): void {
    this.profileService.getUser(this.userAuth.getUserId()).subscribe(
      (data) => {
        console.log(data);
        this.user = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}