import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CheckoutService } from './../../Services/checkout.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-checkout-shipping-confirmation',
  templateUrl: './checkout-shipping-confirmation.component.html',
  styleUrls: ['./checkout-shipping-confirmation.component.css']
})
export class CheckoutShippingConfirmationComponent implements OnInit {
  urlG="/checkout/checkout-shipping.php";
  urlP="/checkout/checkout-shipping-post.php"
  data:any;
  constructor(private http:CheckoutService, private snackBar: MatSnackBar) { }

  Shipping : FormGroup;
  ngOnInit() {
    this.Shipping = new FormGroup({
      calleYNumero: new FormControl(),
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
    {value:2,viewValue:'Michoacsan'},
    {value:3,viewValue:'Tlaxcala'},
  ];

  onSubmit(){
    console.log(this.Shipping.value);
    if(this.Shipping.get('calleYNumero')!==null){
    let form = JSON.stringify(this.Shipping.value)
    console.log(form);
    this.http.url=this.urlP;
    this.http.putMethod(form);
    this.snackBar.open("¡Informacion guardada!", "Ok", {
      duration: 2000,
    });
  }
  }


  
}
