import { Component, OnInit } from '@angular/core';
import{ CatCrudService } from './../../Services/cat-crud.service'

@Component({
  selector: 'app-cat-crud',
  templateUrl: './cat-crud.component.html',
  styleUrls: ['./cat-crud.component.css']
})
export class CatCrudComponent implements OnInit {

  add: boolean; 
  constructor(private http:CatCrudService) {
    this.add = false; 
   }

   public addCat(){
    this.add=false; 
   }

   public addCatDisplay(){
    this.add=true;
   }

  ngOnInit() {
  }

}
