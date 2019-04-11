import { Component, OnInit } from '@angular/core';
import { PassingDataService } from './../Services/passing-data.service';
import { ShoppingcartService } from './../Services/shoppingcart.service';
import { OrdersComponent } from '../user-info/orders/orders.component';

export interface Order{
  name: String;
  quantity: number;
  price: number;
  img: String;
};

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  order1:any;
  numtotal:any;
  ped;
  constructor(private http:ShoppingcartService, private data: PassingDataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message=>{this.ped=message;this.order=JSON.parse(this.ped);});

  }

  //order:Order[]=[];

  order:any[]=[
    {
      name:"Dron",
      quantity:6,
      price:6000,
      total:6000,
      img:"https://www.fotomecanica.mx/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/1/4/1479237342000_img_708264_1.jpg"
    },
    {
      name:"Barbie",
      quantity:5,
      price:5000,
      total:5000,
      img:"https://yt3.ggpht.com/a-/AAuE7mDaZV0RTALrsolijo_tfHdEhSeGWCOJi56xxQ=s900-mo-c-c0xffffffff-rj-k-no"
    },
    {
      name:"Max-Steel",
      quantity:4,
      price:4000 ,
      total:4000,
      img:"https://olimpica.vteximg.com.br/arquivos/ids/177568-900-900/Max-Steel-Turbo-Deslizador-Mattel.jpg?v=636782577566470000"
    },
    
  ];

  caltotal(){
    this.numtotal = this.order.reduce((
      acc,
      obj,
    ) => acc + (obj.price * obj.quantity),
    0);
    console.log("Total: ", this.numtotal)
  }
  //Ttotal= 14014;
Ttotal= this.numtotal;

  passOrder() {
    this.data.changeMessage(this.order);
  }

  delete(){/*
    console.log(this.order);
    let form = JSON.stringify(this.order)
    console.log(form);
    this.http.url=this.urlD;
    this.http.deleteMethod(form);*/
    //Falta agregar delete para array


  }


}
