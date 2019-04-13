import { Component, OnInit } from '@angular/core';
import{ OrdersService } from './../../Services/orders.service'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  order_done:any;
  urlGet="/orden?usuario=1";
  constructor(private http:OrdersService) { }

  ngOnInit() {


    this.http.url=this.urlGet;
    this.order_done=this.http.getMethod();
    this.order_done.subscribe(d => console.log(d)); 

  }
  /*order_done:any[]=[
    {
      id:"Dron",
      cantidad:6,
      total:"6000",
    },
    {
      id:"Barbie",
      cantidad:5,
      total:"5000",
    },
    {
      id:"Max-Steel",
      cantidad:4,
      total:"4000",
      
    }
  ];*/



}
