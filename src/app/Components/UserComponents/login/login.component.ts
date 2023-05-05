import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { UserLogin } from 'src/app/Models/user-login';
import { UserAuthService } from 'src/app/services/user-auth.service';


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
    private userAuthService: UserAuthService,
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

  submited = false;
  error = false;
  errorMsg = "";


  onLogin() {
    if(this.formValidation.invalid)
      return;

    this.userAuthService.login(
      new UserLogin(this.formValidation.value.email ?? "",
      this.formValidation.value.password ?? ""))
      .subscribe({
        next: (res)=> {
          console.log(res);
          this.userAuthService.storeToken(res.token);
          this.router.navigateByUrl('/home');
        },
        error: (error)=> {
          this.error = true;
          if (error.status == 404 || error.status == 401)
            this.errorMsg = "Incorrect email or password.";
          else
            this.errorMsg = "Connection error.";
        }
      });
  }
}
