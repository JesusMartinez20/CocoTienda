import { Component, OnInit } from '@angular/core';
import{ CatCrudService } from './../../Services/cat-crud.service'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cat-crud',
  templateUrl: './cat-crud.component.html',
  styleUrls: ['./cat-crud.component.css']
})
export class CatCrudComponent implements OnInit {

  add: boolean; 
  url="/categorias";
  EditCat:FormGroup; 
  constructor(private http:CatCrudService) {
    this.add = false; 
   }

   public addCat(){
    this.add=false; 
    this.http.url=this.url;
    let form = JSON.stringify(this.EditCat.value);
    this.http.postMethod(form).subscribe(token=>{});
   }

   public addCatDisplay(){
    this.add=true;
   }

  ngOnInit() {
    this.EditCat = new FormGroup({
      id: new FormControl(),
      Categoria: new FormControl(),
    }); 

  }

}
