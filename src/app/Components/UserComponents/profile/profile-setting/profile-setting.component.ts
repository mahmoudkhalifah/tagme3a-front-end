import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.css']
})
export class ProfileSettingComponent {
  user : any
  constructor(private userAuth : UserAuthService , private profileService : UserProfileService , private router : Router) {}

  ngOnInit(): void {
    this.profileService.getUser(this.userAuth.getUserId()).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onUpdateUser(profileForm: NgForm): void {
    if (profileForm.valid) {
      this.profileService.updateUser(this.userAuth.getUserId(), this.user).subscribe(
        (data) => {
          console.log('User updated successfully.');
        this.router.navigate(["../profile"]);

        },
        (error) => {
          console.log('Error updating user:', error);
        }
      );
    }
  }


}
