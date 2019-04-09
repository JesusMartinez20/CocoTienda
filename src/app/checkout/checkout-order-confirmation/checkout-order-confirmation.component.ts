import { Component, OnInit } from '@angular/core';
import { CheckoutService } from './../../Services/checkout.service';
import { PassingDataService } from './../../Services/passing-data.service';

export interface Pedido{
  name: String;
  quantity: number;
  price: number;
  img: String;
};

@Component({
  selector: 'app-checkout-order-confirmation',
  templateUrl: './checkout-order-confirmation.component.html',
  styleUrls: ['./checkout-order-confirmation.component.css']
})
export class CheckoutOrderConfirmationComponent implements OnInit {
  userId=1;
  userAddress;
  constructor(private http:CheckoutService,private data: PassingDataService) { }
  urlGetUserAddress="/checkout/checkout-order.php?userId="+this.userId;
  urlPostOrder="/checkout/checkout-order-post.php";
  urlPostPedido="/checkout/checkout-pedido-post.php";
  address;
  ped;
  Ttotal=15000;
  ngOnInit() {
    this.data.currentMessage.subscribe(message=>{this.ped=message;this.pedido=JSON.parse(this.ped);});
    this.http.url=this.urlGetUserAddress;
    this.http.getMethod().subscribe(d=>{this.userAddress=d;this.address=this.userAddress.fkAddress});
    
  }
  
  pedido:Pedido[]=[];
  /*pedido:Pedido[]=[
    {
      name:"Dron",
      quantity:6,
      total:6000,
      img:"https://www.fotomecanica.mx/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/1/4/1479237342000_img_708264_1.jpg"
    },
    {
      name:"Barbie",
      quantity:5,
      total:5000,
      img:"https://yt3.ggpht.com/a-/AAuE7mDaZV0RTALrsolijo_tfHdEhSeGWCOJi56xxQ=s900-mo-c-c0xffffffff-rj-k-no"
    },
    {
      name:"Max-Steel",
      quantity:4,
      total:4000,
      img:"https://olimpica.vteximg.com.br/arquivos/ids/177568-900-900/Max-Steel-Turbo-Deslizador-Mattel.jpg?v=636782577566470000"
    }
  ];*/

  order:any[]=[
    {
      total:this.Ttotal,
      status:"pedido",
      fechaPedido: new Date,
      direccion: this.address,
      usuario: this.userId
    }
  ];
  
  form;
  
  confirmOrder(){
    this.makeOrder();

    console.log(this.pedido);
    this.form = JSON.stringify(this.pedido)
    console.log(this.form);
    this.http.url=this.urlPostPedido;
    this.http.postMethod(this.form);
  }

  makeOrder(){
    this.form= JSON.stringify(this.order);
    console.log(this.form);
    this.http.url=this.urlPostOrder;
    this.http.postMethod(this.form);
  }

}
