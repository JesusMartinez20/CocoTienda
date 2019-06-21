import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})

export class PruebaComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log(this.flights);
  }

  flights:any[]=[
    {
      id:1,
      aerolinea:"aeromexico",
      origen:"origen",
      destino:"destino",
      capacidad:40
    },
    {
      id:2,
      aerolinea:"aeromexico",
      origen:"origen",
      destino:"destino",
      capacidad:40
    },
    {
      id:3,
      aerolinea:"aeromexico",
      origen:"origen",
      destino:"destino",
      capacidad:40
    },
    {
      id:4,
      aerolinea:"aeromexico",
      origen:"origen",
      destino:"destino",
      capacidad:40
    },
    
  ];


comprar(i){
  let cont=0;
  console.log(i);
  let f=this.flights[i];
  console.log(f);
  let carrito:any[]=[0];
  if(localStorage.getItem("vuelo")){
    carrito=JSON.parse(localStorage.getItem("vuelo"));
  }
  if(carrito.length>0){

    carrito.forEach(element => {
      console.log(f.id);
      console.log(element.id);
      if(f.id==element.id){
        cont++;
      }
    });
    if(cont!=0){
      this.snackBar.open("El vuelo ya fue agregado", "Ok", {duration: 1000,});
    }else{
      carrito.push(f);
    }
    if(carrito[0]==0){
      carrito.splice(0,1);
    }
  }else{
    carrito.push(f);
  }

  localStorage.setItem("vuelo",JSON.stringify(carrito));
}

}