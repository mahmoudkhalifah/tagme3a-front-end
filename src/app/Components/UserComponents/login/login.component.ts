import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { UserLogin } from 'src/app/models/user-login';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  /**
   *
   */
  constructor(private appComponent: AppComponent,
    private userService: UserService,
    private router:Router) {
    appComponent.showFooter = false;
    appComponent.showNavbar = false;
    appComponent.adminNavbar = false;
  }

  formValidation = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.minLength(3), Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
  })

  get email() { return this.formValidation.get('email'); }
  get password() { return this.formValidation.get('password'); }


  onLogin() {

    this.userService.onLogin(
      new UserLogin(this.formValidation.value.email ?? "",
      this.formValidation.value.password ?? ""))
      .subscribe({
        next: (res)=> {
          console.log(res);
          localStorage.setItem("token",res.token);
          //TODO handle user or admin
          //TODO handle ui error if wrong password or not found email
          this.router.navigateByUrl('/home');
        },
        error: (error)=> {
          if (error.status == 404)
            alert("email not found");
          if(error.status == 401)
            alert("incorrect password");
        }
      });
  }
}
