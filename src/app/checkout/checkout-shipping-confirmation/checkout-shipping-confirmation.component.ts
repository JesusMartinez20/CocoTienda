import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkout-shipping-confirmation',
  templateUrl: './checkout-shipping-confirmation.component.html',
  styleUrls: ['./checkout-shipping-confirmation.component.css']
})
export class CheckoutShippingConfirmationComponent implements OnInit {

  constructor() { }

  Shipping : FormGroup;
  ngOnInit() {
    this.Shipping = new FormGroup({
      address: new FormControl(),
      municipality: new FormControl(),
      CP: new FormControl()
    });
  }

  onSubmit(){
    console.log(this.Shipping.value)
  }
}
