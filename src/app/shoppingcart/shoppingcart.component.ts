import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ShoppingcartService } from './../Services/shoppingcart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  urlG="/shoppingcart/shoppingcart.php";
  urlP="/shoppingcart/shoppingcart-post.php"
  data:any;
  constructor(private http:ShoppingcartService) { }

  ngOnInit() {
  }

  order:any[]=[
    {
      name:"Dron",
      quantity:6,
      price:"6000 Cocoins",
      img:"https://www.fotomecanica.mx/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/1/4/1479237342000_img_708264_1.jpg"
    },
    {
      name:"Barbie",
      quantity:5,
      price:"5000 Cocoins",
      img:"https://yt3.ggpht.com/a-/AAuE7mDaZV0RTALrsolijo_tfHdEhSeGWCOJi56xxQ=s900-mo-c-c0xffffffff-rj-k-no"
    },
    {
      name:"Max-Steel",
      quantity:4,
      price:"4000 Cocoins",
      img:"https://olimpica.vteximg.com.br/arquivos/ids/177568-900-900/Max-Steel-Turbo-Deslizador-Mattel.jpg?v=636782577566470000"
    }
  ];

  Total="15000 ";

  delete(){
    

  }

  onSubmit(){
    /*
    console.log(this.order);
    let form = JSON.stringify(this.order)
    console.log(form);
    this.http.url=this.urlP;
    this.http.postMethod(form);*/

  }

}
