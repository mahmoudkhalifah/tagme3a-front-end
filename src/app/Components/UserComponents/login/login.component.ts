import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  /**
   *
   */
  constructor(private appComponent: AppComponent) {
    appComponent.showFooter = false;
    appComponent.showNavbar = false; 
    appComponent.adminNavbar = false;

  }
  formValidation = new FormGroup({
    email: new FormControl("", [Validators.required , Validators.minLength(3) , Validators.email]),
    password: new FormControl("", [Validators.required , Validators.minLength(6) ]),
  })
  
  getValue(){
    console.log(this.formValidation);
    
    if(!this.formValidation.controls["email"].valid){
      alert("Name Invalid");

    }

    if(!this.formValidation.controls["password"].valid){
      alert("password Invalid");

    }
  
  }
}
