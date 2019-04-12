import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../Services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  url ="/productos?idCategoria=";
  elements:any;
  constructor(private categoria:CategoriesService,private route:ActivatedRoute,private router:Router) { 
    this.route.params.subscribe(params=>{this.categoria.URL=this.url+params['id'];
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;});
  }

  ngOnInit() {
    console.log(this.categoria.URL);
    this.categoria.getContenido().subscribe(content=>{this.elements=content;console.log(this.elements);});
 
  }
  // category:any[]=[
  //   {
  //     name:"Dron",
  //     price:"6000 Cocoins",
  //     img:"https://www.fotomecanica.mx/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/1/4/1479237342000_img_708264_1.jpg"
  //   },
  //   {
  //     name:"Barbie",    
  //     price:"5000 Cocoins",
  //     img:"https://yt3.ggpht.com/a-/AAuE7mDaZV0RTALrsolijo_tfHdEhSeGWCOJi56xxQ=s900-mo-c-c0xffffffff-rj-k-no"
  //   },
  //   {
  //     name:"Max-Steel",  
  //     price:"4000 Cocoins",
  //     img:"https://olimpica.vteximg.com.br/arquivos/ids/177568-900-900/Max-Steel-Turbo-Deslizador-Mattel.jpg?v=636782577566470000"
  //   },
  //   {
  //     name:"Hot Wheels Blade Rider",  
  //     price:"4000 Cocoins",
  //     img:"https://static.meijer.com/Media/000/74299/0007429905785_0_A1C1_0600.png"
  //   }
  // ];
}
