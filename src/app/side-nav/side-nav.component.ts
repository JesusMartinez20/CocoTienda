import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../Services/homepage.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  admin:boolean; 
  constructor(private catService:HomepageService) {
    this.catService.URLCategoria="/categorias";
    if(localStorage.getItem('admin') == 'true'){
      this.admin = true; 
    } else{
      this.admin = false; 
    }

   }

  ngOnInit() {
    this.catService.getCategoria().subscribe(cat=>{this.categories=cat ;console.log(this.categories);});
    
  }


  categories;
}
