import { Component, OnInit } from '@angular/core';

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
  user: boolean = false; //False = Admin | True = Client or Guest
  public articleUser = { 
    productName: 'Articulo de prueba', 
    productDescription: 'Esto es un articulo de prueba, aqui se muestra toda la descripcion del articulo ggg', 
    productPrice: '1500', 
    productStock: '13',
    productTotal: '1',
    productImg1: "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-17.jpg",
    productImg2: "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-65.jpg",
    productImg3: "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-59.jpg",
    productImg4: "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-28.jpg",
    productImg5: "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-62.jpg"
  };

  public articleAdmin = { 
    productName: '', 
    productDescription: '', 
    productPrice: '0', 
    productStock: '0',
    productImg1: "https://qph.fs.quoracdn.net/main-qimg-09e661a56e384cbadf54b3ffc18ffb9e",
    productImg2: "https://qph.fs.quoracdn.net/main-qimg-09e661a56e384cbadf54b3ffc18ffb9e",
    productImg3: "https://qph.fs.quoracdn.net/main-qimg-09e661a56e384cbadf54b3ffc18ffb9e",
    productImg4: "https://qph.fs.quoracdn.net/main-qimg-09e661a56e384cbadf54b3ffc18ffb9e",
    productImg5: "https://qph.fs.quoracdn.net/main-qimg-09e661a56e384cbadf54b3ffc18ffb9e"
  };
}
