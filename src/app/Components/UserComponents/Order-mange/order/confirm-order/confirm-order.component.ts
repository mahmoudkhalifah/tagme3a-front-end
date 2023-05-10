import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressInsertDTO } from 'src/app/Models/AddressInsertDTO';
import { CityDTO } from 'src/app/Models/CityDTO';
import { PostOrder } from 'src/app/Models/PostOrderDTO';
import { GetUserCartPrdName } from 'src/app/Models/UserPrdCart';
import { AppComponent } from 'src/app/app.component';
import { AddressesService } from 'src/app/services/addresses.service';
import { BasketService } from 'src/app/services/basket.service';
import { BrandService } from 'src/app/services/brand.service';
import { CityService } from 'src/app/services/city.service';
import { OrderService } from 'src/app/services/order.service';
import { POserviceService } from 'src/app/services/poservice.service';
import { UserAuthService } from 'src/app/services/user-auth.service';


@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
})
export class ConfirmOrderComponent  implements OnInit{
  handler:any = null;
  Cities:any
  Addresses:any
  id=this.auth.getUserId()
  data:any
  addressID:any
  AddressesList:any
  @ViewChild('Error') ErrorDiv !: ElementRef;
  @ViewChild('AddressForm') AddressForm !: ElementRef;



  myForm = new FormGroup({
    myDropdown :new FormControl("",Validators.required)
  })



  constructor(private http: HttpClient,private router:Router,private OPService:POserviceService,private basketSrvice:BasketService,  private orderService:OrderService,private addressService:AddressesService,   private City:CityService ,private appComponent: AppComponent,public basketService:BasketService,private auth:UserAuthService)
  {
    appComponent.showFooter = true;
    appComponent.showNavbar = true;

  }
  ngOnInit(): void {
    this.loadStripe();
    this.basketService.GetUserCartPrdName(this.id).subscribe(
      {
         next:(Items)=>{this.data=Items
        ,this.getCities(),this.getAddresses()},
         error:(err)=>{console.log(err)}
      }
    )
    }
      getCities()
      {
        this.City.getAllCities().subscribe
        ({
            next:(Cit)=>{
              this.Cities = Cit;
              console.log(this.Cities);
            },
            error:(err)=>{console.log(err)}
          });
        }

        getAddresses()
          {
            this.addressService.getAddressesbyUID(this.id).subscribe(

              {
                next:(data)=>{
                  this.Addresses=data
                  this.AddressesList=this.Addresses
                },
                error:(err)=>{console.log(err)}
              }
            )
          }
    Total:any
    get TotalPrice()
    {
      let sum = 0;
        for (let i = 0; i < this.data?.length; i++) {
          sum +=(this.data[i].price - this.data[i].discount||0) * this.data[i].quantity;
        }
      this.Total=sum;
      console.log(this.Total)
      return sum
    }

    // GetAddressID()
    // {
    //   this.addressService.getaddressIDByUID(this.id).subscribe(
    //     {
    //       next:(data)=>{
    //         this.addressID=data
    //       },
    //       error:(err)=>{console.log(err)}
    //     }
    //   )
    // }


    checkOut(PayMethod:any)
    {
      if (PayMethod === "1") {PayMethod = 1;}
      else {PayMethod = 2;}

      let OrderDate = new Date();
      let ShippingDate = new Date();
      ShippingDate.setDate(ShippingDate.getDate()+15);
      let arrivalDate = new Date();
      arrivalDate.setDate(arrivalDate.getDate()+16);


      const orderState=1;
      var Order = new PostOrder(this.addressID,
      this.Total,OrderDate,ShippingDate,arrivalDate,orderState,PayMethod,this.id);
      this.orderService.PostOrder(Order).subscribe(
        {

          next:()=>{
            console.log("Done Order")
            // this.DeleteCart()
            if(PayMethod == "2"){
              this.pay(this.Total*100);
            } else {
              this.AddProductOrder();
            }
          },
          error:(err)=>{console.log(err)
            this.ErrorDiv.nativeElement.style.display="block";

          }
        })
  }
    DeleteCart()
    {
      this.basketService.DeleteCart(this.id).subscribe(
        {
          next:()=>{
            console.log("Deleted")
            this.router.navigate(["/User/Order-mange/order"])

          }
          , error:(err)=>{
             console.log(err);
          }
        }
      )
    }

    AddressTarget:any
    onSelected(AddressChosen:any)
    {
      if(this.AddressesList!='undefined')
      {
        for (let i = 0; i < this.AddressesList.length; i++)
         {
          if (this.AddressesList[i].id == AddressChosen) {
            this.AddressTarget = this.AddressesList[i];
            this.addressID=this.AddressTarget.id
            console.log(this.AddressTarget)
            this.AddressForm.nativeElement.style.display="block";

          }
         }
      }
    }
    AddProductOrder()
    {
      this.OPService.AddProductOrder(this.id).subscribe(
        {
          next:()=>{console.log("Done")
            this.DeleteCart()
        },
          error:(err)=>{console.log(err)}
        }
      )
    }
    pay(amount:any) {
      //amount *= 100;
      console.log(amount);
      this.http.post<{ clientSecret: string }>('https://localhost:7004/api/Payment/create-payment-intent', amount)
          .subscribe(data => {
          var handler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_51N2nJ5BnjdE1DOem7oq1cMTAsCvVVZvzpb1xL8ArfZv2wGUZUDfx8JVbhHzi2NXFNvsfNwS7wp0CGQaNaKPISGkp00rgpk5zE7',
            locale: 'auto',
            token: function (token: any) {
              // You can access the token ID with `token.id`.
              // Get the token ID to your server-side code for use.
              console.log(token);
              this.AddProductOrder();
              // alert('Token Created!!');
            }
          });

          handler.open({
            name: 'Tagme3a Site',
            description: 'PC online shop',
            amount: amount
          });
        });
        }

        loadStripe() {

          if(!window.document.getElementById('stripe-script')) {
            var s = window.document.createElement("script");
            s.id = "stripe-script";
            s.type = "text/javascript";
            s.src = "https://checkout.stripe.com/checkout.js";
            s.onload = () => {
              this.handler = (<any>window).StripeCheckout.configure({
                key: 'pk_test_51N2nJ5BnjdE1DOem7oq1cMTAsCvVVZvzpb1xL8ArfZv2wGUZUDfx8JVbhHzi2NXFNvsfNwS7wp0CGQaNaKPISGkp00rgpk5zE7',
                locale: 'auto',
                token: function (token: any) {
                  // You can access the token ID with `token.id`.
                  // Get the token ID to your server-side code for use.
                  console.log(token)
                  // alert('Payment Success!!');
                }
              });
            }

            window.document.body.appendChild(s);
          }
        }


  }




