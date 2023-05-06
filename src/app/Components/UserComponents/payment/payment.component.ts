import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  handler:any = null;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  //  this.loadStripe();
  }
  pay(amount:any) {
console.log(amount=1000);

  this.http.post<{ clientSecret: string }>('https://localhost:7004/api/Payment/create-payment-intent', amount)
    .subscribe(data => {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51N2nJ5BnjdE1DOem7oq1cMTAsCvVVZvzpb1xL8ArfZv2wGUZUDfx8JVbhHzi2NXFNvsfNwS7wp0CGQaNaKPISGkp00rgpk5zE7',
      locale: 'auto',
      currency:'usd',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log("GOWA PAY");
        console.log(token)
        alert('Token Created!!');
      }
    });

    handler.open({
      name: 'Tagme3a',
      description: '2 widgets',
      amount: amount * 100,
      token:data.clientSecret
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
          currency:'usd',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log("GOWA LOAD STRIPE");
            console.log(token)

            alert('Payment Success!!');
          }
        });
      }

      window.document.body.appendChild(s);
    }

  }


}
