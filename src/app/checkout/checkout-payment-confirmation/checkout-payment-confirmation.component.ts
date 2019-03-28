import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkout-payment-confirmation',
  templateUrl: './checkout-payment-confirmation.component.html',
  styleUrls: ['./checkout-payment-confirmation.component.css']
})
export class CheckoutPaymentConfirmationComponent implements OnInit {

  constructor() { }

  Payment : FormGroup;
  ngOnInit() {
    this.Payment = new FormGroup({
      numCard: new FormControl(),
      expiration: new FormControl(),
      CVV: new FormControl()
    });
  }

  onSubmit(){
    console.log(this.Payment.value)
  }
}
