import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PCReadDTO } from 'src/app/Models/PCReadDTO';
import { PCServiceService } from 'src/app/services/pcservice.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-display-pc',
  templateUrl: './display-pc.component.html',
  styleUrls: ['./display-pc.component.css']
})
export class DisplayPCComponent implements OnInit{
  PCs:PCReadDTO[]=[];
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
  })
}

}
