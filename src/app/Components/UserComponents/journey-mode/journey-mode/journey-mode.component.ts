import { AppComponent } from 'src/app/app.component';
import { JourneyModeService } from './../../../../services/journey-mode.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';
import { BasketService } from 'src/app/services/basket.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserPCInCartInsertDTO } from 'src/app/Models/UserPCInCartInsertDTO';
import { Router } from '@angular/router';

// import { MdbModalRef } from 'mdb-angular-ui-kit/MdbModalRef';

@Component({
  selector: 'app-journey-mode',
  templateUrl: './journey-mode.component.html',
  styleUrls: ['./journey-mode.component.css']
})
export class JourneyModeComponent implements OnInit {

  constructor(appcomponent:AppComponent,private route:Router ,private journeyModeService:JourneyModeService ,  private auth:UserAuthService, private cartService:BasketService) {
    appcomponent.showFooter = false;
    

  }
  myModal?:Modal;
  proceedAfterExceeded:boolean = false;

  exceedBudget(){
    this.proceedAfterExceeded = true;
    this.myModal?.hide();
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

    this.myModal = new Modal(document.getElementById('exampleModal')!);
  }
  totalPrice:number=10000;
  //remainingPrice:number=0;
  steps:any[] = [];
  selectedProducts:any[]=[];
  products:any[]=[]
  @ViewChild('price') price!: ElementRef;
  @ViewChild('quantity') quantity!: ElementRef;
  lowPrice=false;
  lowPRiceBcRemaining=false;
  finish=false;
  //proceedAfterExceeded=false;

  selectedCategory = 0;


  changeStepInfo(index:number) {
    if(this.istTotalPriceLow()) return;
    if(this.selectedCategory!=0)this.resetAfterStep();
    this.noUnits = false;
    this.isSearched = false;
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
        console.log(data);
        this.isSearched=true;

      },
      error:(err)=>{
        console.log(err);
        this.isSearched=true;
        
    
      }
    });
  }
noUnits:boolean = false; 
  selectProduct(prd:any,quantity:number) {
    this.noUnits = false;
    if(prd.unitInStocks >= quantity ) {
      if(this.selectedCategory-1<this.selectedProducts.length) {
        if(!this.proceedAfterExceeded && (prd.price-prd.discount)*quantity > this.remainingPrice + this.selectedProducts[this.selectedCategory-1].product.price*this.selectedProducts[this.selectedCategory-1].quantity)
        {
          this.myModal?.show(); 
          //this.myModal?.   
          if(this.proceedAfterExceeded) {
            this.selectedProducts[this.selectedCategory-1]={product:prd,quantity};
            this.nextStep();
          }
        }
        else {
          this.selectedProducts[this.selectedCategory-1]={product:prd,quantity};
          this.nextStep();
        }
      }
      else if(!this.proceedAfterExceeded && (prd.price-prd.discount)*quantity > this.remainingPrice){
        this.myModal?.show();
        if(this.proceedAfterExceeded) {
          this.selectedProducts[this.selectedCategory-1]={product:prd,quantity};
          this.nextStep();
        }
      }
      else {
        this.selectedProducts.push({product:prd,quantity});
        this.nextStep();
      }
    } else this.noUnits = true;
    console.log(this.proceedAfterExceeded);
  }



  resetAfterStep(){
    this.products = [];
    this.price.nativeElement.value=1000;
    this.quantity.nativeElement.value=1;
  }

  isSearched:boolean = false;
  setTotalPrice(total:number) {
    if(total>=this.totalCost && total >= 10000) {
    }
    this.totalPrice = total;
    this.nextStep();
  }

  istTotalPriceLow() {
    if(this.selectedCategory==0)
    {
      if(this.totalPrice<10000) {
        this.lowPrice=true;
        return true;
      } else if(this.remainingPrice<0) {
        this.lowPRiceBcRemaining=true;
        return true;
      }

      else {
        this.lowPrice=false;
        this.lowPRiceBcRemaining=false;
      }
    }
    return false;
  }


  nextStep() {
    this.noUnits = false;
    if(this.istTotalPriceLow()) return;
    this.isSearched = false;
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


  id:any = this.auth.getUserId()

  finishBuy() {
    const ids = this.selectedProducts.map(item => new  UserPCInCartInsertDTO(item.product.id,item.quantity));
    console.log(ids);
      this.cartService.AddLstProductInCart( ids, this.id).subscribe({
        next:()=>{

          console.log("added");
          this.route.navigate(['/User/ManageBasket/basket']);

        },
        error:(err)=>{
          console.log(err);
        }
      })
  }

  get remainingPrice() {
    //could decrease it after every time purchanse
    let remaining = this.totalPrice;
    this.selectedProducts.forEach((prd:any)=>remaining-=(prd.product.price-prd.product.discount)*prd.quantity);
    return remaining;
  }

  get totalCost() {
    //could decrease it after every time purchanse
    let total = 0;
    this.selectedProducts.forEach((prd:any)=>total+=(prd.product.price-prd.product.discount)*prd.quantity);
    return total;
  }
}
