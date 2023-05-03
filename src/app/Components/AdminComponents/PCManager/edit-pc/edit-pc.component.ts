import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PCInsertDTO } from 'src/app/Models/PCInsertDTO';
import { PCServiceService } from 'src/app/services/pcservice.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-edit-pc',
  templateUrl: './edit-pc.component.html',
  styleUrls: ['./edit-pc.component.css']
})
export class EditPCComponent {
  id:any;
  pc:any;
  image:any;

  formValidation = new FormGroup({
    name : new FormControl("",[Validators.required  , Validators.minLength(3)]),
    // price:new FormControl(0,[Validators.min(0)])
  })


  constructor(private appComponent:AppComponent , private myService:PCServiceService , private router:Router , activate:ActivatedRoute){
      appComponent.showFooter = false;
      appComponent.adminNavbar = false;
      this.id = activate.snapshot.params["id"];
      this.pc = myService.getPCById(this.id).subscribe({
        next:(data)=>{
          this.pc = data;
          // console.log(data);
          // console.log(this.pc);
        },
        error:(err)=>{
          console.log(err);
        }
      })
  }

  get NameValid(){
    return this.formValidation.controls["name"].valid;
  }
  
  // get PriceValid(){
  //   return this.formValidation.controls["price"].valid;
  // }

  handleUpload(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      var res = reader.result;
      this.image = res;
    };
}
img:any;
getValue(){
  if(this.NameValid ){
    this.img = this.image.toString().split(",")[1];
    let pcUpdated = new PCInsertDTO(this.pc.bundleName ,this.img );
    this.myService.updatePCById(this.id , pcUpdated).subscribe({
      next:()=>{
        this.router.navigate(["admin/PCManager/view-pc"]);

      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
}
