import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PCServiceService } from 'src/app/Services/pcservice.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-addtocart-pc',
  templateUrl: './addtocart-pc.component.html',
  styleUrls: ['./addtocart-pc.component.css']
})
export class AddtocartPcComponent {
  id:any;
  pc:any;
  constructor(private appComponent: AppComponent,private router:Router,private route:ActivatedRoute,private MyService:PCServiceService) {
    this.id = route.snapshot.params["Id"];
    MyService.getPCById(this.id).subscribe({
      next:(data)=>{
        this.pc = data;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }


}
