import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../Services/homepage.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  urlCategorias="/categorias";
  urlContenido="/";
  posts:any;

  constructor(private categoria:HomepageService) { }

  ngOnInit() {
    /*
    this.categoria.URLContenido=this.urlContenido;
    this.posts=this.categoria.getContenido();
    console.log(this.posts);

    this.categoria.URLCategoria=this.urlCategorias;
    this.categoria.getCategoria().subscribe(cat=>console.log(cat));
    console.log(this.posts);*/
  }
  imageUrlArray=[   
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-17.jpg",
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-65.jpg",
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-59.jpg"
  ];  
}
