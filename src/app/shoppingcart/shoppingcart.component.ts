import { Component, OnInit } from '@angular/core';
import { PassingDataService } from './../Services/passing-data.service';
import { ShoppingcartService } from './../Services/shoppingcart.service';
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material';

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
  constructor(private http:ShoppingcartService,private snackBar: MatSnackBar, private data: PassingDataService,private router : Router) { }

  ngOnInit() {
    this.currentOrders=JSON.parse(localStorage.getItem("cart"));
    //this.currentOrders = ShoppingcartComponent.order;
    //this.data.currentMessage.subscribe(message=>{this.ped=message;this.order1=JSON.parse(this.ped);});
    this.order1=this.currentOrders[this.currentOrders.length-1];
    console.log(this.order1);
    console.log(this.currentOrders);

    if(this.order1.name!=null){
      for(this.cont=0; this.cont<this.currentOrders.length-1;this.cont++){///Nuevo
        if (this.order1.name==this.currentOrders[this.cont].name){
            this.repetido=true;
            this.currentOrders[this.cont].cantidad+=this.order1.cantidad;
            this.currentOrders.pop();
            localStorage.setItem("cart", JSON.stringify(this.currentOrders));
            if(this.currentOrders[this.cont].cantidad>ShoppingcartComponent.order[this.cont].stock){
              this.currentOrders[this.cont].cantidad=ShoppingcartComponent.order[this.cont].stock; 
            }
        } 
      }
      
      if(!this.repetido){
        this.agregar();
        this.caltotal();
      }
      this.repetido=false;
      for(this.cont=0; this.cont<this.currentOrders.length;this.cont++){
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
  this.numsubtotal = this.currentOrders[index].cantidad*this.currentOrders[index].precio;
  console.log("Subtotal: ", this.numsubtotal,this.currentOrders[index].cantidad);
  this.subtotal[index]=this.numsubtotal;
  this.currentOrders[index].total=this.subtotal[index];
}


  caltotal(){
    this.numtotal = this.currentOrders.reduce((
      acc,
      obj,
    ) => acc + (obj.precio * obj.cantidad),
    0);
    console.log("Total: ", this.numtotal)
    this.Ttotal=this.numtotal;
    for(this.cont=0; this.cont<this.currentOrders.length;this.cont++){
      this.currentOrders[this.cont].ttotals=this.Ttotal;
    }
    
  }

  passOrder() {
    //ShoppingcartComponent.order[0].total=this.order1[0].total;
    for( let i=0;i<this.currentOrders.length;i++){
      if(this.currentOrders[i].stock<this.currentOrders[i].cantidad){
        this.snackBar.open("Se ha excedido la cantidad del stock en algún producto", "Ok", {duration: 2000});
        return;
      }
    }
  
    if(!(localStorage.getItem('token'))){
      console.log("Debo iniciar sesion"); 
      localStorage.setItem('source', 'cart');
      this.snackBar.open("Es necesario iniciar sesión para realizar una compra", "Ok", {duration: 3000,});
      this.router.navigate(['/login']);
    }else{
      this.data.changeMessage(this.currentOrders);
      this.router.navigate(["/checkout"])
    }
    
  }

  delete(index:number){

      if (this.currentOrders[index]) {
        this.currentOrders.splice(index,1);
      }
      if(this.currentOrders.length==0){
          this.visible==false;
          window.location.reload();
      }
      this.data.changeMessage(this.currentOrders);      
  }

  agregar(){
    console.log(ShoppingcartComponent.order);
    ShoppingcartComponent.order.push(this.order1);
    this.data.changeMessage(ShoppingcartComponent.order2); ///Nuevo    
  }


}
