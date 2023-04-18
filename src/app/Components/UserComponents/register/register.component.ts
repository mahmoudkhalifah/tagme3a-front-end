import { UserAuthService } from 'src/app/services/user-auth.service';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { UserRegister } from 'src/app/models/user-register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private appComponent: AppComponent,
    private userAuthService:UserAuthService,
    private router:Router) {
    appComponent.showFooter = false;
    appComponent.showNavbar = false;
    appComponent.adminNavbar = false;
  }

  matchValues(matchTo: string) {
    return (control: AbstractControl) => {
      const form = control.parent;
      if (form) {
        const matchingControl = form.get(matchTo);
        if (matchingControl && control.value !== matchingControl.value) {
          return { mismatch: true };
        }
      }
      return null;
    };
  }

  formValidation = new FormGroup({
    username: new FormControl("", [Validators.required , Validators.minLength(3) , Validators.maxLength(15)]),
    email: new FormControl("", [Validators.required , Validators.email,Validators.minLength(3) ]),
    fname: new FormControl("", [Validators.required , Validators.minLength(3) ]),
    lname: new FormControl("", [Validators.required , Validators.minLength(3) ]),
    gender: new FormControl("", [Validators.required ]),
    password: new FormControl("", [Validators.required , Validators.minLength(6),Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)]),
    confirm_password: new FormControl("", [Validators.required , this.matchValues('password')]),

  })

  error = false;
  errorMsgs:string[] = [];

  onRegister(){
    console.log(this.formValidation);
    this.userAuthService.signup(new UserRegister(
      this.formValidation.value.username??"",
      this.formValidation.value.fname??"",
      this.formValidation.value.lname??"",
      parseInt(this.formValidation.value.gender??"0"),
      this.formValidation.value.email??"",
      this.formValidation.value.password??"",
    )).subscribe(
      {
        next:(res)=>{
          console.log(res);
          this.router.navigateByUrl('/login');
        },
        error:(err)=>{
          this.error=true;
          this.errorMsgs = [];
          if(err.status == 400) {
            for(let e of err.error) {
              this.errorMsgs.push(e.description);
            }
          }
          else {
            this.errorMsgs.push("Connection error.");
          }
        }
      }
    )
  }
}
