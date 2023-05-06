import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressInsertDTO } from 'src/app/Models/AddressInsertDTO';
import { AppComponent } from 'src/app/app.component';
import { AddressesService } from 'src/app/services/addresses.service';
import { CityService } from 'src/app/services/city.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-add-adress',
  templateUrl: './add-adress.component.html',
})
export class AddADRESSComponent {


  id=this.auth.getUserId()

    formValidation = new FormGroup({
    apartementNumber:new FormControl("",Validators.required),
    floorNumber:new FormControl(0,[Validators.min(0)]),
    streetName:new FormControl("",[Validators.required]),
    area:new FormControl("",[Validators.required]),
    zipCode:new FormControl("",[Validators.required,Validators.minLength(2)]),
    nearestLandmark:new FormControl("",[Validators.required]),
    city:new FormControl(null,[Validators.required])
  })
  Cities: any;

  constructor(private router:Router, private City:CityService ,private appComponent: AppComponent,private addressService:AddressesService,private auth:UserAuthService)
  {
    appComponent.showFooter = false;
    appComponent.showNavbar = true;
    appComponent.adminNavbar = false;

  }
  ngOnInit(): void {

      this.getCities()
  }
  getCities()
  {
    this.City.getAllCities().subscribe
    ({
        next:(Cit)=>{
          this.Cities = Cit;
          console.log(this.Cities);
        },
        error:(err)=>{console.log(err)}
      });
    }
    get apartementNumberValid()
      {
        return this.formValidation.controls["apartementNumber"].valid
      }
      get floorNumberValid()
      {
        return this.formValidation.controls["floorNumber"].valid
      }
      get streetNameValid()
      {
        return this.formValidation.controls["streetName"].valid
      }
      get areaValid()
      {
        return this.formValidation.controls["area"].valid
      }
      get zipCodeValid()
      {
        return this.formValidation.controls["zipCode"].valid
      }
      get nearestLandmarkValid()
      {
        return this.formValidation.controls["nearestLandmark"].valid
      }

      // apartementNumber,floorNumber,streetName,area,zipCode,nearestLandmark,cityId,userId
      getValue(){
        if(this.formValidation.status=="VALID")
        {
          var Address=new AddressInsertDTO(this.formValidation.controls['apartementNumber'].value??" ",
          this.formValidation.controls['floorNumber'].value??0,
          this.formValidation.controls['streetName'].value??"",
          this.formValidation.controls['area'].value??"",this.formValidation.controls['zipCode'].value??"",
          this.formValidation.controls['nearestLandmark'].value??"",this.formValidation.controls['city'].value??1,
          this.id);
          this.AddAddress(Address);
        }

          else
        {
          console.log("Form: ",this.formValidation);
          console.log("apartementNumber: ",this.formValidation.controls["apartementNumber"].valid);
          console.log("floorNumber: ",this.formValidation.controls["floorNumber"].valid);
          console.log("streetName: ",this.formValidation.controls["streetName"].valid);
          console.log("area: ",this.formValidation.controls["area"].valid);
          console.log("zipCode: ",this.formValidation.controls["zipCode"].valid);
          console.log("nearestLandmark: ",this.formValidation.controls["nearestLandmark"].valid);
          console.log("city: ",this.formValidation.controls["city"].valid);
        }
      }
      AddAddress(Address:AddressInsertDTO)
      {
        console.log(Address);
        this.addressService.PostAddress(Address).subscribe({
          next:()=>{
           console.log("Done");
           this.router.navigate(["/User/Order-mange/confirm-order"])

          },
          error:(err)=>{console.log(err)}
      })
    }




}
