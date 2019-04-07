import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
// class ProductComponent {
  
// }
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @ViewChild('slideshow') slideshow: any;

  user: boolean = true; //False = Admin | True = Client or Guest
  public articleUser = { 
    productName: 'Articulo de prueba', 
    productDescription: 'Esto es un articulo de prueba, aqui se muestra toda la descripcion del articulo ggg', 
    productPrice: '1500', 
    productStock: '13',
    productTotal: '1',
  };

  public articleAdmin = { 
    productName: '', 
    productDescription: '', 
    productPrice: '0', 
    productStock: '0',
  };

  imageUrlArray:string[]=[
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-17.jpg",
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-65.jpg",
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-59.jpg",
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-28.jpg",
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-62.jpg"
  ];
}
