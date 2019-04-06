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
      ciudad: new FormControl(),
      estado: new FormControl(),
      CP: new FormControl()
    });
  }

  municipalities:any[]=[
    {value:1,viewValue:'Zapopan'},
    {value:2,viewValue:'Guadalajara'},
    {value:3,viewValue:'Tonala'},
  ];

  estados:any[]=[
    {value:1,viewValue:'Jalisco'},
    {value:2,viewValue:'Michoaan'},
    {value:3,viewValue:'Tlaxcala'},
  ];

  onSubmit(){
    console.log(this.Shipping.value)
  }
}
