import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-order-confirmation',
  templateUrl: './checkout-order-confirmation.component.html',
  styleUrls: ['./checkout-order-confirmation.component.css']
})
export class CheckoutOrderConfirmationComponent implements OnInit {

  constructor() { }

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


}
