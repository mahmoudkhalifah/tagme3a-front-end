import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrdPCUpdateDTO } from 'src/app/Models/PrdPCUpdateDTO';
import { PrdPcDeleteDTO } from 'src/app/Models/PrdPcDeleteDTO';
import { PCServiceService } from 'src/app/services/pcservice.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-edit-prdpc',
  templateUrl: './edit-prdpc.component.html',
  styleUrls: ['./edit-prdpc.component.css']
})
export class EditPrdpcComponent implements OnInit {
  id:any;
  pc:any;
  constructor(private appComponent:AppComponent , private myService:PCServiceService , private router:Router , private activate:ActivatedRoute){
    appComponent.showFooter = false;
    this.getPcById();
    
  }
  ngOnInit(): void {
    
  }

  getPcById(){
    this.id =  this.activate.snapshot.params["id"];
    console.log(this.id);
    this.myService.getPCById(this.id).subscribe({
      next:(data)=>{
        this.pc = data;
        console.log(this.pc);
        //console.log(this.pc.products.productId);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
    prd:any;
  EditProduct(id:any){
    var  quantitiy = document.getElementById(`qty-${id}`) as HTMLInputElement;
    console.log(quantitiy.value);
    let prd = new PrdPCUpdateDTO(id , +quantitiy.value);
    console.log(prd);

    this.myService.updateprdpc(this.pc.id , prd).subscribe({
      next:()=>{
        //this.router.navigate(["admin/PCManager/view-pc"]);

      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

  DeleteProduct(id:any , i :number){
    let prdPc = new PrdPcDeleteDTO(id);
    console.log(prdPc);
    console.log(this.pc.id);
    this.myService.deletePrdPC(this.pc.id , prdPc).subscribe({
      next:()=>{
        this.pc.products.splice(i , 1);

      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
}
