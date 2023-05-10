import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryInsert } from 'src/app/Models/CategoryInsertDTO';
import { bootstrapApplication } from '@angular/platform-browser';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  imagePic:any
  in:any
  formValidation = new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(3)]),
    description:new FormControl("",[Validators.minLength(3),Validators.required]),
    image:new FormControl("",[Validators.required]),
    orderinjourneymode:new FormControl(0,[Validators.min(1)]),
    injourneymode:new FormControl(0,[Validators.required])
  })
  constructor(private appComponent: AppComponent,private router:Router, private myService:CategoryServiceService) {
    appComponent.showFooter = false;
  }
  get NameValid(){

    //this.message1 = this.formValidation.controls["name"];
    //console.log(this.message1);
      return this.formValidation.controls["name"].valid;
    }

    get InJourneyModeValid(){

      //this.message1 = this.formValidation.controls["name"];
      //console.log(this.message1);
        return this.formValidation.controls["injourneymode"].valid;
      }

    get OrderInJourneyModeValid(){

      //this.message1 = this.formValidation.controls["name"];
      //console.log(this.message1);
        return this.formValidation.controls["orderinjourneymode"].valid;
      }

    get DescriptionValid(){
      return this.formValidation.controls["description"].valid;
    }
    get ImageValid()
    {
      return this.formValidation.controls["image"].valid;
    }

  handleUpload(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
     // console.log("ELSORA ELGEDIDA");
      var res = reader.result;
      this.imagePic = res;
    };
}
getValue(){
  //console.log("Form: ",this.formValidation.valid);
  //console.log("Name: ",this.formValidation.controls["name"].valid);
  //console.log("Description: ",this.formValidation.controls["description"].valid);
  //console.log("Logo: ",this.formValidation.controls["logo"].valid);
  if(this.formValidation.controls["name"].valid &&this.formValidation.controls["description"].valid&&this.formValidation.controls["image"].valid)
  {
    //alert("Data Entered Succesfully");
    this.Add(this.formValidation.controls["name"].value,
    this.formValidation.controls["description"].value,
    this.formValidation.controls["image"].value,this.formValidation.controls["injourneymode"].value,this.formValidation.controls["orderinjourneymode"].value)
  }
}
  Add(Name:any, Description:any, Image:any,InJourneyMode:any,OrderInJourneyModeValid:any){
    Image = this.imagePic.toString().split(",")[1];
    //console.log(Image);

    if(InJourneyMode == 1) {this.in = true}
    else{
      this.in=false;
    }
    let newCat = new CategoryInsert(Name,Description,Image,this.in,OrderInJourneyModeValid);
    console.log(newCat);
    this.myService.addCategory(newCat).subscribe({
      next:()=>{

  //  this.router.navigate(["admin/categoryManager/view-categories"])
        this.router.navigate(["admin/dashboard"]);
      },
      error:(err:any)=>{console.log(err)}
    });

    // let newCat = new CategoryInsert(Name,Description,Image);
    // //console.log(newCat);
    // this.myService.addCategory(newCat).subscribe({
    //   next:()=>{
    //     this.router.navigate(["admin/categoryManager/view-categories"])
    //   },
    //   error:(err)=>{console.log(err)}
    // });

    // let newCat = new CategoryInsert(Name,Description,Image);
    // //console.log(newCat);
    // this.myService.addCategory(newCat).subscribe({
    //   next:()=>{
    //     this.router.navigate(["admin/dashboard"])
    //   },
    //   error:(err)=>{console.log(err)}
    // });

  }
}
