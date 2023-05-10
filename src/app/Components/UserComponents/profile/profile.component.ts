import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user : any
  constructor(private appComponent: AppComponent ,private userAuth : UserAuthService , private profileService : UserProfileService) {
    appComponent.showFooter=true;
    appComponent.showNavbar =true;
  }

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