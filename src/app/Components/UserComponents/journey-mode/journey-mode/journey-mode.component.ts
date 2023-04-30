import { JourneyModeService } from './../../../../services/journey-mode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journey-mode',
  templateUrl: './journey-mode.component.html',
  styleUrls: ['./journey-mode.component.css']
})
export class JourneyModeComponent implements OnInit {

  constructor(private journeyModeService:JourneyModeService) {

  }
  ngOnInit(): void {
    this.journeyModeService.getCategories().subscribe({
      next: (data)=>{
        this.steps = data;
        this.steps.forEach((s)=>s.visited=false);
        this.steps.unshift({
          name:"Budget",
          visited:true,
        });
        console.log(this.steps);
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }
  totalPrice:number=0;
  //remainingPrice:number=0;
  steps:any[] = [];
  selectedProducts:any[]=[];
  products:any[]=[]


  selectedCategory = 0;

  changeStepInfo(index:number) {
    this.selectedCategory = index;
  }
  getProducts(maxPrice:number) {
    this.journeyModeService.getProducts(this.steps[this.selectedCategory].categoryId,maxPrice)
    .subscribe({
      next:(data)=>{
        this.products=data;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

  selectProduct(prd:any,quantity:number) {
    // this.remainingPrice-=prd.price;
    // this.remainingPrice+=prd.discount;
    if(this.selectedCategory-1<this.selectProduct.length)
      this.selectedProducts[this.selectedCategory-1]={product:prd,quantity};
    else this.selectedProducts.push({product:prd,quantity});
    this.nextStep();
  }

  nextStep() {
    this.selectedCategory++;
    this.steps[this.selectedCategory].visited = true;
    this.products = [];
  }

  get remainingPrice() {
    //could decrease it after every time purchanse
    let remaining = this.totalPrice;
    this.selectedProducts.forEach((prd:any)=>remaining-=(prd.product.price-prd.product.discount)*prd.quantity);
    return remaining;
  }
}
