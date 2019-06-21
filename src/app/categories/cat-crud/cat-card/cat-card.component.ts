import { Component, OnInit } from '@angular/core';
import{ CatCrudService } from './../../../Services/cat-crud.service'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent implements OnInit {

  mod: boolean; 
  add: boolean; 
  all_cat:any;
  url="/categorias";
  EditCat:FormGroup;
  constructor(private http:CatCrudService) { 
    this.mod = false;
    this.add = false;

    this.http.url=this.url;
    this.all_cat=this.http.getMethod();
    this.all_cat.subscribe(d => console.log(d));     
    
  }

  

  public saveCat(){
    let form = JSON.stringify(this.EditCat.value);
    this.http.putMethod(form).subscribe(d => {});
    this.mod=false; 
    
  }

  public modCat(){
    console.log("modCat"); 
    this.mod = true; 
    console.log(this.mod);
  }

  public delCat(){
    this.http.url = this.url; 
    this.http.deleteMethod(this.EditCat.value.id)
  }

  public addCat(){

  }

  ngOnInit() {
    this.EditCat = new FormGroup({
      id: new FormControl(),
      Categoria: new FormControl(),
    }); 

  }

}
