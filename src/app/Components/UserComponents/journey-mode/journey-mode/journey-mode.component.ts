import { JourneyModeService } from './../../../../services/journey-mode.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-journey-mode',
  templateUrl: './journey-mode.component.html',
  styleUrls: ['./journey-mode.component.css']
})
export class JourneyModeComponent implements OnInit {

  constructor(private journeyModeService:JourneyModeService) {

  }
  catsLoaded = false;
  ngOnInit(): void {
    this.journeyModeService.getCategories().subscribe({
      next: (data)=>{
        this.steps = data;
        this.steps.forEach((s)=>s.visited=false);
        this.steps.unshift({
          name:"Budget",
          visited:true,
        });
        this.catsLoaded = true;
        console.log(this.steps);
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }
  totalPrice:number=10000;
  //remainingPrice:number=0;
  steps:any[] = [];
  selectedProducts:any[]=[];
  products:any[]=[]


  selectedCategory = 0;

  istTotalPriceLow() {
    if(this.selectedCategory==0)
    {
      if(this.totalPrice<10000) {
        this.totalPrice=10000;
        this.lowPrice=true;
      } else if(this.remainingPrice<0) {
        this.totalPrice=this.remainingPrice;
        this.lowPrice=true;
      }
      else { this.lowPrice=false; }
    }
    return this.lowPrice;
  }

  changeStepInfo(index:number) {
    if(this.istTotalPriceLow()) return;
    if(this.selectedCategory!=0)this.resetAfterStep();
    this.filterPriceHigh=false;
    this.selectedCategory = index;
    this.products = [];
  }
  filterPriceHigh=false;
  getProducts(maxPrice:number) {
    if(maxPrice>this.remainingPrice) {
      this.filterPriceHigh = true;
    } else {
      this.filterPriceHigh=false;
    }
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
    if((prd.price-prd.discount)*quantity > this.remainingPrice)
    {
      alert("your don't have money to buy this please edit your total money in first step or choose cheaper product");
      return;
    }
    if(this.selectedCategory-1<this.selectProduct.length)
      this.selectedProducts[this.selectedCategory-1]={product:prd,quantity};
    else this.selectedProducts.push({product:prd,quantity});
    this.nextStep();
  }

  @ViewChild('price') price!: ElementRef;
  @ViewChild('quantity') quantity!: ElementRef;
  lowPrice=false;
  finish=false;

  resetAfterStep(){
    this.products = [];
    this.price.nativeElement.value=1000;
    this.quantity.nativeElement.value=1;
  }
  nextStep() {
    if(this.istTotalPriceLow()) return;
    if(this.selectedCategory==this.steps.length-1)
    {
      this.finish=true;
      return;
    }
    this.filterPriceHigh=false;
    this.selectedCategory++;
    this.steps[this.selectedCategory].visited = true;
    this.resetAfterStep();
  }

  finishBuy() {

  }

  get remainingPrice() {
    //could decrease it after every time purchanse
    let remaining = this.totalPrice;
    this.selectedProducts.forEach((prd:any)=>remaining-=(prd.product.price-prd.product.discount)*prd.quantity);
    return remaining;
  }
}
