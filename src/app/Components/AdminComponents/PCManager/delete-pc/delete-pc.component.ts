import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PCServiceService } from 'src/app/services/pcservice.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-delete-pc',
  templateUrl: './delete-pc.component.html',
  styleUrls: ['./delete-pc.component.css']
})
export class DeletePCComponent {
  Id:any
  pc:any
  constructor(private appComponent: AppComponent,activate:ActivatedRoute,private service:PCServiceService,private router: Router)
  {
    appComponent.showFooter = false;
    this.Id = activate.snapshot.params["id"];
    this.pc = service.getPCById(this.Id).subscribe({
      next:(data)=>
      {
        this.pc = data;

      },
      error:(error)=>{
    console.log(error)
      }
    });
  console.log(this.pc);

  }
  Delete()
  {
        this.service.DeletePCComponent(this.Id).subscribe(
          {
            next:()=>{
              // this.router.navigate(["admin/PCManager/view-pc"])
              this.router.navigate(["admin/dashboard"]);
            },
            error:(err)=>{console.log(err)}
          }
        );
  }
}

