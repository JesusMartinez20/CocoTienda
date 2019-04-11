import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CheckoutService } from './../../Services/checkout.service';

@Component({
  selector: 'app-checkout-payment-confirmation',
  templateUrl: './checkout-payment-confirmation.component.html',
  styleUrls: ['./checkout-payment-confirmation.component.css']
})
export class CheckoutPaymentConfirmationComponent implements OnInit {
  urlG="/checkout/checkout-payment.php";
  urlP="/checkout/checkout-payment-post.php"
  data:any;
  constructor(private http:CheckoutService) { }

  Payment : FormGroup;
  ngOnInit() {
    this.Payment = new FormGroup({
      tarjetaCredito: new FormControl(),
      fechaExpiracion: new FormControl(),
      CVV: new FormControl()
    });

    /*this.http.url=this.urlG;
    this.data=this.http.getMethod().subscribe(d=>{this.info=d;this.datos=this.info.cvv;
      console.log(this.datos);
    });*/


      
  }
  info:any;


 
  datos;
  /*info:any[]=[
    { tarjetaCredito:1234567,
      fechaExpiracion: "3/2/2019",
      cvv:123
    }
  ]
  tarjetaCredito=12345678;
  fechaExpiracion: Date =new Date(2019,2,2);
  cvv=123;*/

  onSubmit(){
    
    console.log(this.Payment.value);
    let form = JSON.stringify(this.Payment.value)
    console.log(form);
    //this.http.url=this.urlP;
    this.http.putMethod(form);
    
    console.log(this.datos);

  }
}
