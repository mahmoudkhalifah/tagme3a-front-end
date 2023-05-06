import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';
import { AppComponent } from 'src/app/app.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrandInsert } from 'src/app/Models/BrandInsertDTO';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent {
  logoPic:any
  message1:any
  formValidation = new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(3)]),
    description:new FormControl("",[Validators.minLength(3),Validators.required]),
    logo:new FormControl("",[Validators.required])
  })
  constructor(private appComponent: AppComponent,private router:Router, private myService:BrandService) {
    appComponent.showFooter = false;
  }
  handleUpload(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
     // console.log("ELSORA ELGEDIDA");
      var res = reader.result;
      this.logoPic = res;
    };
}
get NameValid(){

//this.message1 = this.formValidation.controls["name"];
//console.log(this.message1);
  return this.formValidation.controls["name"].valid
}
get DescriptionValid(){
  return this.formValidation.controls["description"].valid
}
get LogoValid()
{
  return this.formValidation.controls["logo"].valid;
}

getValue(){
  //console.log("Form: ",this.formValidation.valid);
  //console.log("Name: ",this.formValidation.controls["name"].valid);
  //console.log("Description: ",this.formValidation.controls["description"].valid);
  //console.log("Logo: ",this.formValidation.controls["logo"].valid);
  if(this.formValidation.controls["name"].valid &&this.formValidation.controls["description"].valid&&this.formValidation.controls["logo"].valid)
  {
    //alert("Data Entered Succesfully");
    this.Add(this.formValidation.controls["name"].value,
    this.formValidation.controls["description"].value,
    this.formValidation.controls["logo"].value)
  }
}
  Add(Name:any, Description:any, Image:any){
   // console.log(Name);
    //console.log(Description);
    Image = this.logoPic.toString().split(",")[1];
    //console.log(Image);
    let newBrand = new BrandInsert(Name,Description,Image);
    //console.log(newBrand);
    this.myService.addBrand(newBrand).subscribe(
      {
        next:()=>{
          this.router.navigate(["admin/dashboard"])
        },
        error:(err)=>{console.log(err)}
      }
    );
  }
}
