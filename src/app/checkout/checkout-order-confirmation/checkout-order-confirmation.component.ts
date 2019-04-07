import { Component, OnInit } from '@angular/core';
import { CheckoutService } from './../../Services/checkout.service';

@Component({
  selector: 'app-checkout-order-confirmation',
  templateUrl: './checkout-order-confirmation.component.html',
  styleUrls: ['./checkout-order-confirmation.component.css']
})
export class CheckoutOrderConfirmationComponent implements OnInit {

  constructor(private http:CheckoutService) { }
  urlG="/checkout/checkout-shipping.php";
  urlP="/checkout/checkout-shipping-post.php"
  data:any;
  ngOnInit() {
  }

  order:any[]=[
    {
      name:"Dron",
      quantity:6,
      total:"6000 Cocoins",
      img:"https://www.fotomecanica.mx/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/1/4/1479237342000_img_708264_1.jpg"
    },
    {
      name:"Barbie",
      quantity:5,
      total:"5000 Cocoins",
      img:"https://yt3.ggpht.com/a-/AAuE7mDaZV0RTALrsolijo_tfHdEhSeGWCOJi56xxQ=s900-mo-c-c0xffffffff-rj-k-no"
    },
    {
      name:"Max-Steel",
      quantity:4,
      total:"4000 Cocoins",
      img:"https://olimpica.vteximg.com.br/arquivos/ids/177568-900-900/Max-Steel-Turbo-Deslizador-Mattel.jpg?v=636782577566470000"
    }
  ];

  Ttotal="15000 Cocoins";
  
  confirmOrder(){
    console.log(this.order);
    let form = JSON.stringify(this.order)
    console.log(form);
    this.http.url=this.urlP;
    this.http.postMethod(form);
  }

}
