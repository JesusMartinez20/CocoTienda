import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
// class ProductComponent {
  
// }
export class ProductComponent implements OnInit {

  constructor() { }

  @ViewChild('slideshow') slideshow: any;
  user: boolean = false; //False = Admin | True = Client or Guest

  articleForm : FormGroup;
  articleImages : FormGroup;
  ngOnInit() {
    this.articleForm = new FormGroup({
      Name: new FormControl(),
      Description: new FormControl(),
      Price: new FormControl(),
      Stock: new FormControl(),
      Category: new FormControl(),
    })
    this.articleImages = new FormGroup({
      Img1: new FormControl(),
      Img2: new FormControl(),
      Img3: new FormControl(),
      Img4: new FormControl(),
      Img5: new FormControl()
    })
    this.articleForm.setValue({
      Name: 'Articulo de prueba', 
      Description: 'Esto es un articulo de prueba, aqui se muestra toda la descripcion del articulo ggg', 
      Price: '2000', 
      Stock: '10',
      Category: 'Drones'
    })
  }
  
 

  imageUrlArray:string[]=[
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-17.jpg",
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-65.jpg",
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-59.jpg",
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-28.jpg",
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-62.jpg"
  ];

  article = {
    productName: 'Articulo de prueba', 
    productDescription: 'Esto es un articulo de prueba, aqui se muestra toda la descripcion del articulo ggg', 
    productPrice: '2000', 
    productStock: '10',
    productTotal: '0',
    productCategory: 'Drones',
    imageUrlArray: this.imageUrlArray
  };

  categories: string[] = [
    'Drones', 'Muñecas', 'Pelotas', 'Figuras de acción', 'Carros'
  ];

  onSubmit(){
    console.log(this.articleForm.value)
  }

  onSubmit2(){
    console.log(this.articleImages.value)
  }
}
