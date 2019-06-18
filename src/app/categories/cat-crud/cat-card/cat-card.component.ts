import { Component, OnInit } from '@angular/core';
import{ CatCrudService } from './../../../Services/cat-crud.service'

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent implements OnInit {

  mod: boolean; 
  add: boolean; 
  all_cat:any;
  url="/";
  constructor(private http:CatCrudService) { 
    this.mod = false;
    this.add = false;

    this.http.url=this.url;
    this.all_cat=this.http.getMethod();
    this.all_cat.subscribe(d => console.log(d));     
    
  }

  public saveCat(){
    this.mod = false; 
    console.log(this.mod);
  }

  public modCat(){
    console.log("modCat"); 
    this.mod = true; 
    console.log(this.mod);
  }

  public delCat(){

  }

  public addCat(){

  }

  ngOnInit() {

  }

}
