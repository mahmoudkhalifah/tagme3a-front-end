import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PCServiceService } from 'src/app/Services/pcservice.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-details-pc',
  templateUrl: './details-pc.component.html',
  styleUrls: ['./details-pc.component.css']
})
export class DetailsPCComponent implements OnInit{
  
  Id:any;
  pc:any;

  
  constructor(private appComponent:AppComponent , myactivate:ActivatedRoute , private myService :PCServiceService){
    appComponent.showFooter = false;
    this.Id = myactivate.snapshot.params["id"];

  }

  ngOnInit(): void {
    this.myService.getPCById(this.Id) .subscribe({
      next:(data)=>{
        this.pc = data;
      },
      error:(err)=>{
        console.log(err);
      }
    }) 
  }



}
