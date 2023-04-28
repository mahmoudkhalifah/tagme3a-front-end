import { Component } from '@angular/core';

@Component({
  selector: 'app-journey-mode',
  templateUrl: './journey-mode.component.html',
  styleUrls: ['./journey-mode.component.css']
})
export class JourneyModeComponent {
  steps = [
    {
      categoryId:1,
      name:"Motherboard",
      visited:true,
    },
    {
      categoryId:2,
      name:"CPU",
      visited:true,
    },
    {
      categoryId:3,
      name:"GPU",
      visited:true,
    },
    {
      categoryId:4,
      name:"RAM",
      visited:false,
    },
    {
      categoryId:5,
      name:"Hard desk",
      visited:false,
    },
    {
      categoryId:6,
      name:"Cooler",
      visited:false,
    },
    {
      categoryId:7,
      name:"Case",
      visited:false,
    },
  ]

  selectedCategory = 0;

  changeStepInfo(index:number) {
    this.selectedCategory = index;
    console.log("hi")
    console.log(index);
  }
}
