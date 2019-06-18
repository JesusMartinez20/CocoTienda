import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, NgModelGroup} from '@angular/forms';
import { AddProductService } from './../Services/add-product.service';
import { MatSnackBar } from '@angular/material';
import { PassingDataService } from './../Services/passing-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  url="/agregar_productos";
  urlCategories="/categorias";
  categories:any;

  constructor(private http:AddProductService, private snackBar: MatSnackBar, private data: PassingDataService, private route:ActivatedRoute,private router:Router) 
  { 

  }

  articleForm : FormGroup;

  ngOnInit() {
    this.articleForm = new FormGroup({
      nombre: new FormControl(),
      descripcion: new FormControl(),
      precio: new FormControl(),
      stock: new FormControl(),
      categoria: new FormControl(),
      img1: new FormControl(),
      img2: new FormControl(),
      img3: new FormControl(),
      img4: new FormControl(),
      img5: new FormControl()
    });

    this.http.url=this.urlCategories;
    this.http.getMethod().subscribe(d=>{
      this.categories=d;
    });
  }

  articleSubmit(){
    let array:any[];
    array=this.articleForm.value;
    console.log(this.articleForm.value);
        
    let form = JSON.stringify(this.articleForm.value)
    console.log(form);
    this.http.url=this.url;
    this.http.postMethod(form).subscribe(d => {});
    this.snackBar.open("¡Informacion guardada!", "Ok", {duration: 2000,});
  }
}