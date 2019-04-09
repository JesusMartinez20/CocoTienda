import { Component, OnInit } from '@angular/core';
import{ OrdersService } from './../../Services/orders.service'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  order_done:any;
  urlGet="";
  constructor(private http:OrdersService) { }

  ngOnInit() {


    this.http.url=this.urlGet;
    this.order_done=this.http.getMethod();


  }
 /* order_done:any[]=[
    {
      Num:"Dron",
      Item_quantity:6,
      Total:"6000",
    },
    {
      Num:"Barbie",
      Item_quantity:5,
      Total:"5000",
    },
    {
      Num:"Max-Steel",
      Item_quantity:4,
      Total:"4000",
      
    }
  ];*/



}
