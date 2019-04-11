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
  cont:number;
  numtotal:number;
  numsubtotal:number;
  subtotal:number[]=[];
  Ttotal:number;
  ped;
  x:number;
  constructor(private http:ShoppingcartService, private data: PassingDataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message=>{this.ped=message;this.order1=JSON.parse(this.ped);});
    console.log(this.order1);
    this.agregar();
    this.caltotal();
    for(this.cont=0; this.cont<this.order.length;this.cont++){
      this.calsubtotal(this.cont);
    }
    
    

  }

  //order:Order[]=[];

  order:Order[]=[];
  
/*
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
*/



calsubtotal(index: number){
  this.numsubtotal = this.order[index].quantity*this.order[index].price;
  console.log("Subtotal: ", this.numsubtotal);
  this.subtotal[index]=this.numsubtotal;
}


  caltotal(){
    this.numtotal = this.order.reduce((
      acc,
      obj,
    ) => acc + (obj.price * obj.quantity),
    0);
    console.log("Total: ", this.numtotal)
    this.Ttotal=this.numtotal;
  }

  passOrder() {
    this.data.changeMessage(this.order);
  }

  delete(index: number){


      if (this.order[index]) {
        this.order.splice(index,1);
      }
  }

  agregar(){
    this.order.push(this.order1);
  }


}
