import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PCServiceService } from 'src/app/Services/pcservice.service';
import { AppComponent } from 'src/app/app.component';
import { ProductService } from '../../productManager/services/product.service';
import { PrdPCDTO } from 'src/app/Models/PrdPcDTO';

@Component({
  selector: 'app-addprdpc',
  templateUrl: './addprdpc.component.html',
  styleUrls: ['./addprdpc.component.css']
})
export class AddprdpcComponent implements OnInit {

  
  selectedPC:any;
  pcs:any;
  products:any;
  constructor(appcomponent:AppComponent , private route :Router , private myService:PCServiceService 
    , private prdService:ProductService){
    appcomponent.showFooter = false;
  }
  ngOnInit(): void {
    this.myService.getAllPCs().subscribe({
      next:(data)=>{
        this.pcs= data;
        console.log(this.pcs);
      },
      error:(err)=>{
        console.log(err);
      }
    });
    
    this.prdService.getAllProducts().subscribe({
      next:(data)=>{
        this.products = data;
        console.log(this.products);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  
  AddProduct(id:any){
    let quantity = document.getElementById(`qty-${id}`) as HTMLInputElement;
    console.log(quantity.value);
    let newprd = new PrdPCDTO(id
       , this.selectedPC.id , +quantity.value);

    this.myService.addPrdPc(newprd).subscribe({
      next:()=>{
        console.log(newprd);
      },
      error:(err)=>{
        console.log(err);
      }

    });
    console.log(newprd);
    quantity.value="";

  }





}