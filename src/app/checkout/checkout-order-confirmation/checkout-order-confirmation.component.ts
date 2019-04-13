import { Component, OnInit } from '@angular/core';
import { CheckoutService } from './../../Services/checkout.service';
import { PassingDataService } from './../../Services/passing-data.service';
import { Router } from '@angular/router';

export interface Pedido{
  name: String;
  cantidad: number;
  total: number;
  img: String;
  ttotals: number;
};

@Component({
  selector: 'app-checkout-order-confirmation',
  templateUrl: './checkout-order-confirmation.component.html',
  styleUrls: ['./checkout-order-confirmation.component.css']
})
export class CheckoutOrderConfirmationComponent implements OnInit {
  id;
  userId;
  userAddress;
  urlOrden="/pedido";
  urlPedido="/orden"
  constructor(private http:CheckoutService,private data: PassingDataService,private router : Router) {
    this.userId=Number.parseInt(localStorage.getItem('userID'));
    this.order=
  {
    total:this.Ttotal,
    estado:"Pedido",
    direccion:2,
    usuario:this.userId

  }
   }
  urlGetUserAddress="/checkout/checkout-order.php?userId="+this.userId;
  urlPostOrder="/checkout/checkout-order-post.php";
  urlPostPedido="/checkout/checkout-pedido-post.php";
  address;
  ped;
  Ttotal;
  ngOnInit() {
    this.data.currentMessage.subscribe(message=>{
      this.ped=message;
      this.pedido=JSON.parse(this.ped);
      console.log(this.pedido);
      this.order.total=this.pedido[0].ttotals;
    });
    //this.http.url=this.urlGetUserAddress;
    this.http.getMethod().subscribe(d=>{this.userAddress=d;this.address=this.userAddress.fkAddress});
    
    
  }
  
  pedido:any[]=[];
  /*pedido:any[]=[
    {
      name:"Dron",
      cantidad:6,
      producto:1,
      orden:this.id,
      total:6000,
      img:"https://yt3.ggpht.com/a-/AAuE7mDaZV0RTALrsolijo_tfHdEhSeGWCOJi56xxQ=s900-mo-c-c0xffffffff-rj-k-no"
    },
    {
      name:"Barbie",
      cantidad:5,
      producto:2,
      orden:this.id,
      total:5000,
      img:"https://yt3.ggpht.com/a-/AAuE7mDaZV0RTALrsolijo_tfHdEhSeGWCOJi56xxQ=s900-mo-c-c0xffffffff-rj-k-no"
    },
    {
      name:"Max-Steel",
      cantidad:4,
      producto:3,
      orden:this.id,
      total:4000,
      img:"https://olimpica.vteximg.com.br/arquivos/ids/177568-900-900/Max-Steel-Turbo-Deslizador-Mattel.jpg?v=636782577566470000"
    }
  ];*/

  order;
  home;

  
  
  form;
  
  confirmOrder(){
    this.makeOrder().subscribe(data => {
      this.id= (data as any).id;
      console.log(this.pedido);
      this.pedido.forEach(d => d.orden = this.id);
      console.log(this.pedido);
      this.form = JSON.stringify(this.pedido)
      console.log(this.form);
      this.http.url=this.urlOrden;
      this.http.postMethod(this.form).subscribe(r => console.log(r));
    });
    if(this.home!=null){
      this.router.navigate(['/']);
    }
  }

  makeOrder(){
    console.log (this.order);
    this.form= JSON.stringify(this.order);
    console.log(this.form);
    this.http.url=this.urlPedido;
    return this.home= this.http.postMethod(this.form);
  }

}
