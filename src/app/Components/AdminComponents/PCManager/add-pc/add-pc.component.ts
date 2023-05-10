import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PCInsertDTO } from 'src/app/Models/PCInsertDTO';
import { PCServiceService } from 'src/app/services/pcservice.service';
import { AppComponent } from 'src/app/app.component';
import { ProductService } from '../../productManager/services/product.service';

@Component({
  selector: 'app-add-pc',
  templateUrl: './add-pc.component.html',
  styleUrls: ['./add-pc.component.css']
})
export class AddPCComponent {

  img:any;
  formValidation = new FormGroup({
    name:new FormControl("",[Validators.required , Validators.minLength(3)]),
    // price: new FormControl(0,[Validators.min(0)]),
    image:new FormControl("", Validators.required)
  })

  constructor(appcomponent:AppComponent , private route :Router , private myService:PCServiceService
    , private prdService:ProductService){
    appcomponent.showFooter = false;
  }

  NameValid(){
    return this.formValidation.controls["name"].valid;
  }


  // PriceValid(){
  //   return this.formValidation.controls["price"].valid;
  // }


  ImageValid(){
    return this.formValidation.controls["image"].valid;
  }

  handleUpload(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      var res = reader.result;
      this.img = res;
    };
}
Image:any;
Name:any;
Price:any;
getValue(){

  if(this.formValidation.controls["name"].valid && this.formValidation.controls["image"].valid){
    this.Image = this.img.toString().split(",")[1];
    this.Name= this.formValidation.controls["name"].value;
    // this.Price = this.formValidation.controls["price"].value
    let pc = new PCInsertDTO(this.Name, this.Image);

    this.myService.addPC(pc).subscribe({
      next:()=>{
        // this.route.navigate(["admin/PCManager/view-pc"]);
        this.route.navigate(["admin/dashboard"]);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
}
