import { Component, OnInit } from '@angular/core';
import { PassingDataService } from './../Services/passing-data.service';
import { ShoppingcartService } from './../Services/shoppingcart.service';


export interface Order{
  total: number;
  name: String;
  cantidad: number;
  precio: number;
  img: String;
  stock: number;
  ttotals: number;
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
  visible: boolean;
  repetido: boolean;///Nuevo
  currentOrders:any[]=[];
  constructor(private http:ShoppingcartService, private data: PassingDataService) { }

  ngOnInit() {
    this.currentOrders = ShoppingcartComponent.order;
    this.data.currentMessage.subscribe(message=>{this.ped=message;this.order1=JSON.parse(this.ped);});
    console.log(this.order1);

    if(this.order1.name!=null){
      for(this.cont=0; this.cont<ShoppingcartComponent.order.length;this.cont++){///Nuevo
        if (this.order1.name==ShoppingcartComponent.order[this.cont].name){
            this.repetido=true;
            ShoppingcartComponent.order[this.cont].cantidad+=this.order1.cantidad;
        }else{
          this.repetido=false;
        } 
      }
      
      if(!this.repetido){
        this.agregar();
        this.caltotal();
      }
      for(this.cont=0; this.cont<ShoppingcartComponent.order.length;this.cont++){
        this.calsubtotal(this.cont);
      }
    }
    if(ShoppingcartComponent.order.length==0){
        this.visible=false;
    }else{
      this.visible=true;
    }
    
    

  }
  static order:any[]=[];
  static order2:any[]=[];///Nuevo

calsubtotal(index: number) {
  this.numsubtotal = ShoppingcartComponent.order[index].cantidad*ShoppingcartComponent.order[index].precio;
  console.log("Subtotal: ", this.numsubtotal,ShoppingcartComponent.order[index].cantidad);
  this.subtotal[index]=this.numsubtotal;
  ShoppingcartComponent.order[index].total=this.subtotal[index];
}


  caltotal(){
    this.numtotal = ShoppingcartComponent.order.reduce((
      acc,
      obj,
    ) => acc + (obj.precio * obj.cantidad),
    0);
    console.log("Total: ", this.numtotal)
    this.Ttotal=this.numtotal;
    for(this.cont=0; this.cont<ShoppingcartComponent.order.length;this.cont++){
      ShoppingcartComponent.order[this.cont].ttotals=this.Ttotal;
    }
    
  }

  passOrder() {
    //ShoppingcartComponent.order[0].total=this.order1[0].total;
    this.data.changeMessage(ShoppingcartComponent.order);
    ShoppingcartComponent.order=ShoppingcartComponent.order2;
  }

  delete(index:number){/*
    console.log(this.order);
    let form = JSON.stringify(this.order)
    console.log(form);
    this.http.url=this.urlD;
    this.http.deleteMethod(form);*/
    /*let i=this.order.findIndex();
    if(i==-1){
      this.order.push()
    }else{
      this.order.splice(i,1,{name:this.order1.name})
    }
*/

      if (ShoppingcartComponent.order[index]) {
        ShoppingcartComponent.order.splice(index,1);
      }
      if(ShoppingcartComponent.order.length==0){
          this.visible==false;
          window.location.reload();
      }
      this.data.changeMessage(ShoppingcartComponent.order);      
  }

  agregar(){
    console.log(ShoppingcartComponent.order);
    ShoppingcartComponent.order.push(this.order1);
    this.data.changeMessage(ShoppingcartComponent.order2); ///Nuevo    
  }


}
