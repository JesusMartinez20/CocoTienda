import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public article = { 
    productName: '', 
    productDescription: '', 
    productPrice: '0', 
    productStock: '0',
    productImg1: "",
    productImg2: "",
    productImg3: "",
    productImg4: "",
    productImg5: ""
  };
}
