import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PCReadDTO } from 'src/app/Models/PCReadDTO';
import { PCServiceService } from 'src/app/Services/pcservice.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-display-pc',
  templateUrl: './display-pc.component.html',
  styleUrls: ['./display-pc.component.css']
})
export class DisplayPCComponent implements OnInit{
  PCs:PCReadDTO[]=[];
  pc:any;

  constructor(private appComponent:AppComponent , myactivate:ActivatedRoute , private myService :PCServiceService){
    appComponent.showFooter = false;
  }
ngOnInit(): void {
  this.myService.getAllPCs().subscribe({
    next:(data)=>{
      this.PCs = data;
      console.log(data);
    },
    error:(err)=>{
      console.log(err);
    }
  });

  
}

MyDictionary : Record<number, number> = {};


 addToCart(id:any){
  this.myService.getPCById(id).subscribe({
    next: (data) => {
      this.pc = data;
    },
    error: (err) => {
      console.log(err);
    }
  });
  for (let product of this.pc.products) {
    this.MyDictionary[product.productId]=product.quantitiy;

  }

  
  console.log(this.MyDictionary);
}
}
