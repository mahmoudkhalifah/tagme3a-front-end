import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private appComponent: AppComponent) {
    appComponent.showFooter = false;
    appComponent.showNavbar = false;
    appComponent.adminNavbar = false;


    
  }
  formValidation = new FormGroup({
    username: new FormControl("", [Validators.required , Validators.minLength(3) , Validators.maxLength(15)]),
    password: new FormControl("", [Validators.required , Validators.minLength(6) ]),
    confirm_password: new FormControl("", [Validators.required , Validators.minLength(6) ]),
    email: new FormControl("", [Validators.required , Validators.email ]),
  })

  getValue(){
    console.log(this.formValidation);
    
    if(!this.formValidation.controls["username"].valid || this.formValidation.controls["username"].value == ""){
      alert("Name Invalid");

    }

    if(this.formValidation.controls["password"].value != this.formValidation.controls["confirm_password"].value){
      alert("Password and confirm password not matched");

    }

    if(!this.formValidation.controls["password"].valid || this.formValidation.controls["password"].value == ""){
      alert("password Invalid");

    }

    if(!this.formValidation.controls["email"].valid || this.formValidation.controls["email"].value == ""){
      alert("email Invalid");

    }
}
}