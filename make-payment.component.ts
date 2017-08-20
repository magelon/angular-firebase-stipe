import { Component, OnInit, HostListener } from '@angular/core';
import { PaymentService } from '../payment.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {
  handler: any;
  amount = 500;
  constructor(private paymentSvc: PaymentService ) { }
  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: '/your/awesome/logo.jpg',
      locale: 'auto',
      token: token => {
        this.paymentSvc.processPayment(token, this.amount)
      }
    });
  }
  handlePayment() {
    this.handler.open({
      name: 'FireStarter',
      description: 'Deposit Funds to Account',
      amount: this.amount
    });
  }
  @HostListener('window:popstate')
    onPopstate() {
      this.handler.close()
    }
}
