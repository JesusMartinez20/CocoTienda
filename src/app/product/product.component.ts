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

  url="/productos";
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
  Total;
  productTotal=1;

  ngOnInit() {
    const isAdmin = localStorage.getItem('admin');
    console.log(isAdmin);
    if (isAdmin === 'true') {
      this.user = false;
    } else {
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
      this.articleSend.img=this.article[0].img1; 
      this.imageUrlArray.push(this.article[0].img1); 
      this.imageUrlArray.push(this.article[0].img2); 
      this.imageUrlArray.push(this.article[0].img3); 
      this.imageUrlArray.push(this.article[0].img4); 
      this.imageUrlArray.push(this.article[0].img5); 

      console.error(data);
    });    
  }

  imageUrlArray=[];
  

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
    this.http.url=this.url;
    this.http.putMethod(form);
    this.snackBar.open("¡Informacion guardada!", "Ok", {duration: 2000,});
    }
  }

  deleteArticle(){
    console.log(this.articleForm.value);
    let form = JSON.stringify(this.articleForm.value)
    console.log(form);
    this.http.url=this.url;
    this.http.deleteMethod(form);
    this.snackBar.open("Producto eliminado", "Ok", {duration: 2000,});
  }
}
