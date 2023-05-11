import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CategoryDTO } from '../../../../Models/CategoryDTO';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { CategoryInsert } from 'src/app/Models/CategoryInsertDTO';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {
  Id:any
  category:any;
  image:any;
  in:any;
  formValidation = new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(2)]),
    description:new FormControl("",[Validators.minLength(3),Validators.required]),
    orderinjourneymode:new FormControl(0,[Validators.required,Validators.min(1)]),
    injourneymode:new FormControl([Validators.required])
  });
  constructor(private appComponent: AppComponent,private router:Router, myActivate:ActivatedRoute,private myService:CategoryServiceService) {
    appComponent.showFooter = false;
    this.Id = myActivate.snapshot.params["id"];
    this.category = myService.getCategoryById(this.Id).subscribe({
      next:(data)=>{
        this.category = data
        console.log(this.category);//
      },
      error:(err)=>{console.log(err);}
    });
  }
  get NameValid(){

    //this.message1 = this.formValidation.controls["name"];
    //console.log(this.message1);
      return this.formValidation.controls["name"].valid
    }
    get InJourneyModeValid(){

      //this.message1 = this.formValidation.controls["name"];
      //console.log(this.message1);
        return this.formValidation.controls["injourneymode"].valid;
      }
    get DescriptionValid(){
      return this.formValidation.controls["description"].valid
    }
    get OrderInJourneyModeValid(){

      //this.message1 = this.formValidation.controls["name"];
      //console.log(this.message1);
        return this.formValidation.controls["orderinjourneymode"].valid;
      }
  handleUpload(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
    //  console.log("ELSORA ELGEDIDA");
      var res = reader.result;
      this.image = res;
    };
}
getValue(){
  //console.log("Form: ",this.formValidation.valid);
  console.log("Name: ",this.formValidation.controls["name"].valid);
  console.log("Description: ",this.formValidation.controls["description"].valid);
  //console.log("Logo: ",this.formValidation.controls["logo"].valid);
  if(this.formValidation.controls["name"].valid && this.formValidation.controls["description"].valid
  &&this.formValidation.controls["orderinjourneymode"].valid&&this.formValidation.controls["injourneymode"].valid)
  {
    console.log("E3ml UPDATE");
    //alert("Data Entered Succesfully");
    this.Update(this.formValidation.controls["orderinjourneymode"].value,
    this.formValidation.controls["injourneymode"].value);
  }
}
  Update(order:any,inJourney:any){
    var BI;
    if(this.image == undefined){
      console.log("Ana gowa elundefined");
   //   BI = new CategoryInsert(this.category.name,this.category.description);
   if(+inJourney === 1){this.in = true}
   else if(+inJourney === 0) {this.in = false}
      // else{this.in = false;}
      console.log(inJourney);
      console.log(typeof inJourney);
     // this.category.image = this.image.toString().split(",")[1];
      this.category.orderForJourneyMode =+order
      this.category.inJourneyMode = this.in
      BI = new CategoryInsert(this.category.name,this.category.description,this.category.image,this.category.inJourneyMode,this.category.orderForJourneyMode);

      console.log(BI);
    }
    else

    {
      //var cat = new
      if(+inJourney == 1){this.in = true}
      else{this.in = false;}
      this.category.image = this.image.toString().split(",")[1];
      this.category.orderForJourneyMode =+order
      this.category.inJourneyMode = this.in
      BI = new CategoryInsert(this.category.name,this.category.description,this.category.image,this.category.inJourneyMode,this.category.orderForJourneyMode);
      console.log(BI);
    }
    console.log("FINAL BI")
    console.log(BI);
    //this.category.image = this.image.toString().split(",")[1];
   // console.log("CAt AFTER UPDATe");
     // console.log(this.category);
      //console.log(this.image.toString().split(",")[1]);
      this.myService.updateCategoryById(this.Id,this.category).subscribe(
        {
          next:()=>{
            // this.router.navigate(["admin/categoryManager/view-categories"])
            this.router.navigate(["admin/dashboard"]);
          },
          error:(err)=>{console.log(err)}
        }
      );
    }
}
