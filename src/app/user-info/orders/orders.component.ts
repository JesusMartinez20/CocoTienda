import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  order_done:any[]=[
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
  ];

}
