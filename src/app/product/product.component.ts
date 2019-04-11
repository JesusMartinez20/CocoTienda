import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl, NgModelGroup} from '@angular/forms';
import { ProductService } from './../Services/product.service';
import { MatSnackBar } from '@angular/material';
import { PassingDataService } from './../Services/passing-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  urlGet="";
  urlGetI="";
  urlPut="";
  urlDelete="";

  constructor(private producto:ProductService, private snackBar: MatSnackBar, private data: PassingDataService) { }

  @ViewChild('slideshow') slideshow: any;
  user: boolean = true; //False = Admin | True = Client or Guest

  articleForm : FormGroup;
  articleImages : FormGroup;

  ngOnInit() {
    this.producto.url=this.urlGet;
    this.article=this.producto.getMethod();

    this.producto.url=this.urlGetI;
    //this.imageUrlArray=this.producto.getMethod();

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
      Name: this.article.productName, 
      Description: this.article.productDescription, 
      Price: this.article.productPrice,
      Stock: this.article.productStock,
      Category: this.article.productCategory
    })
  }
  
  imageUrlArray:string[5];
  /*imageUrlArray:string[] = [
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-17.jpg",
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-65.jpg",
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-59.jpg",
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-28.jpg",
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-62.jpg"
  ];*/

  article:any;
  /*article:any = {
    productName: 'Articulo de prueba', 
    productDescription: 'Esto es un articulo de prueba, aqui se muestra toda la descripcion del articulo ggg', 
    productPrice: '2000', 
    productStock: '10',
    productTotal: '1',
    productCategory: 'Drones',
  };*/
  
  articleSend:any = {
    name: this.article.productName,
    quantity: this.article.productTotal,
    price: this.article.productPrice,
    img: this.imageUrlArray[0],
  }

  categories: string[] = [
    'Drones', 'Muñecas', 'Pelotas', 'Figuras de acción', 'Carros'
  ];

  buyArticle(){
    console.log(this.articleSend);
    this.data.changeMessage(this.articleSend);
  }

  imageSubmit(){
    console.log(this.articleImages.value);
    if(this.articleImages.get('Img1')!==null){
    let form = JSON.stringify(this.articleImages.value)
    console.log(form);
    this.producto.url=this.urlPut;
    this.producto.putMethod(form);
    this.snackBar.open("¡Informacion guardada!", "Ok", {duration: 2000,});
    }
  }

  articleSubmit(){
    console.log(this.articleForm.value);
    if(this.articleForm.get('Name')!==null){
    let form = JSON.stringify(this.articleForm.value)
    console.log(form);
    this.producto.url=this.urlPut;
    this.producto.putMethod(form);
    this.snackBar.open("¡Informacion guardada!", "Ok", {duration: 2000,});
    }
  }

  deleteArticle(){
    console.log(this.articleForm.value);
    let form = JSON.stringify(this.articleForm.value)
    console.log(form);
    console.log(this.articleImages.value);
    let formI = JSON.stringify(this.articleImages.value)
    console.log(formI);
    this.producto.url=this.urlDelete;
    this.producto.deleteMethod(form);
    this.producto.deleteMethod(formI);
  }
}
