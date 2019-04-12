import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl, NgModelGroup} from '@angular/forms';
import { ProductService } from './../Services/product.service';
import { MatSnackBar } from '@angular/material';
import { PassingDataService } from './../Services/passing-data.service';
import { ActivatedRoute } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

export interface article{
  productName: String,
  productDescription: String,
  productPrice: number,
  productStock: number,
  productTotal: number,
  productCategory: String,
};

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  url;
  urlGet="/productos";
  urlGetI="";
  urlPut="";
  urlDelete="";
  id: number;
  
  constructor(private http:ProductService, private snackBar: MatSnackBar, private data: PassingDataService, private route:ActivatedRoute) 
  { 
    this.route.params.subscribe(params=>this.url="/productos?id="+params['id']);
  }

  @ViewChild('slideshow') slideshow: any;
  user: boolean; //False = Admin | True = Client or Guest

  articleForm : FormGroup;
  articleImages : FormGroup;
  article:any;
  nom;
  pre;
  stock;
  Total=15000;
  productTotal=1;

  ngOnInit() {
    const isAdmin = localStorage.getItem('admin');
    console.log(isAdmin);
    if (isAdmin === 'true') {
      console.log('aasd');
      this.user = false;
    } else {
      console.log('bbb');
      this.user = true;
    }
    this.articleForm = new FormGroup({
      Name: new FormControl(),
      Description: new FormControl(),
      Price: new FormControl(),
      Stock: new FormControl(),
      Category: new FormControl(),
      Img1: new FormControl(),
      Img2: new FormControl(),
      Img3: new FormControl(),
      Img4: new FormControl(),
      Img5: new FormControl()
    });


    this.http.getMethod(this.url).subscribe(data=>{
      this.article=data;console.log(this.article);
      this.articleSend.name=this.article[0].Nombre;
      this.articleSend.precio=this.article[0].Precio;
      this.articleSend.producto=this.article[0].ID_Producto;
      this.articleSend.stock=this.article[0].Stock;
      console.error(data);
    });
    
  }

  //imageUrlArray:string[5];
  imageUrlArray = [
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-17.jpg",
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-65.jpg",
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-59.jpg",
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-28.jpg",
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-62.jpg"
  ];

  /*article:any = {
    productName: 'Articulo de prueba',
    productDescription: 'Esto es un articulo de prueba, aqui se muestra toda la descripcion del articulo ggg',
    productPrice: '2000',
    productStock: '10',
    productTotal: '1',
    productCategory: 'Drones',
  };*/

  articleSend:any = {
    total:null,
     producto: null,
     name: this.nom,
     cantidad:this.productTotal,
     precio: this.pre,
     stock: this.stock,
    img: this.imageUrlArray[0],
  }

  categories: string[] = [
    'Drones', 'Muñecas', 'Pelotas', 'Figuras de acción', 'Carros'
  ];

  buyArticle(){
    this.articleSend.cantidad=this.productTotal;
    console.log(this.articleSend);
    this.data.changeMessage(this.articleSend);
    this.snackBar.open("Articulo agregado al carrito", "Ok", {duration: 3000,});
  }

  articleSubmit(){
    console.log(this.articleForm.value);
    if(this.articleForm.get('Name')!==null){
    let form = JSON.stringify(this.articleForm.value)
    console.log(form);
    this.http.url=this.urlPut;
    this.http.putMethod(form);
    this.snackBar.open("¡Informacion guardada!", "Ok", {duration: 2000,});
    }
  }

  deleteArticle(){
    console.log(this.articleForm.value);
    let form = JSON.stringify(this.articleForm.value)
    console.log(form);
    this.http.url=this.urlDelete;
    this.http.deleteMethod(form);
  }
}
