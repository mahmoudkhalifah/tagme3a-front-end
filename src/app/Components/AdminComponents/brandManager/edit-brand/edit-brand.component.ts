import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';
import { AppComponent } from 'src/app/app.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrandInsert } from 'src/app/Models/BrandInsertDTO';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent {
  Id:any
  brand:any;
  logo:any;
  formValidation = new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(2)]),
    description:new FormControl("",[Validators.minLength(3),Validators.required]),
  })
  constructor(private appComponent: AppComponent,private router:Router, myActivate:ActivatedRoute,private myService:BrandService) {
    appComponent.showFooter = false;
    this.Id = myActivate.snapshot.params["id"];
    this.brand = myService.getBrandById(this.Id).subscribe({
      next:(data)=>{
        this.brand = data
        console.log(this.brand);
      },
      error:(err)=>{console.log(err);}
    });
  }

  get NameValid(){

    //this.message1 = this.formValidation.controls["name"];
    //console.log(this.message1);
      return this.formValidation.controls["name"].valid
    }
    get DescriptionValid(){
      return this.formValidation.controls["description"].valid
    }


  handleUpload(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
    var res = reader.result;
    this.logo = res;
  };
}
getValue(){
  //console.log("Form: ",this.formValidation.valid);
  console.log("Name: ",this.formValidation.controls["name"].valid);
  console.log("Description: ",this.formValidation.controls["description"].valid);
  //console.log("Logo: ",this.formValidation.controls["logo"].valid);
  if(this.formValidation.controls["name"].valid && this.formValidation.controls["description"].valid)
  {
    console.log("E3ml UPDATE");
    //alert("Data Entered Succesfully");
    this.Update();
  }
}
  Update(){
    var BI;
    if(this.logo == undefined){
      BI = new BrandInsert(this.brand.name,this.brand.description);
    }
    else
    {
      this.brand.logo = this.logo.toString().split(",")[1];
      BI = new BrandInsert(this.brand.name,this.brand.description,this.brand.logo);
    }
      this.myService.updateBrandById(this.Id,this.brand).subscribe(
        {
          next:()=>{
            this.router.navigate(["admin/brandManager/view-brands"])
          },
          error:(err)=>{console.log(err)}
        }
      );
    }
}
