import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})

export class PruebaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 

  content:any[]=[
    {
      category: "Drones",
      name:"Dron",
      total:"6000 Cocoins",
      img:"https://www.fotomecanica.mx/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/1/4/1479237342000_img_708264_1.jpg"
    },
    {
      category: "Muñecas",
      name:"Barbie",    
      total:"5000 Cocoins",
      img:"https://yt3.ggpht.com/a-/AAuE7mDaZV0RTALrsolijo_tfHdEhSeGWCOJi56xxQ=s900-mo-c-c0xffffffff-rj-k-no"
    },
    {
      category: "Figuras de acción",
      name:"Max-Steel",  
      total:"4000 Cocoins",
      img:"https://olimpica.vteximg.com.br/arquivos/ids/177568-900-900/Max-Steel-Turbo-Deslizador-Mattel.jpg?v=636782577566470000"
    },
    {
      category: "Autos",
      name:"Hot Wheels Blade Rider",  
      total:"4000 Cocoins",
      img:"https://static.meijer.com/Media/000/74299/0007429905785_0_A1C1_0600.png"
    },

    {
      category: "Muñecas",
      name:"Holiday Barbie",  
      total:"4000 Cocoins",
      img:"https://f.aukro.cz/images/sk6931735681/58e84a24-8182-438a-a3d6-75fa735fa08b"
    },
    {
      category: "Muñecas",
      name:"Holiday Barbie",  
      total:"4000 Cocoins",
      img:"https://f.aukro.cz/images/sk6931735681/58e84a24-8182-438a-a3d6-75fa735fa08b"
    },
    {
      category: "Muñecas",
      name:"Holiday Barbie",  
      total:"4000 Cocoins",
      img:"https://f.aukro.cz/images/sk6931735681/58e84a24-8182-438a-a3d6-75fa735fa08b"
    },
    {
      category: "Figuras de acción",
      name:"Spiderman",  
      total:"4000 Cocoins",
      img:"http://www.lgamoblamientos.com/pics/65610/0.png"
    }
    
  ];  

  categories:any[]=[
    {
      category: "Drones"
    },
    {
      category: "Muñecas"
    },
    {
      category: "Figuras de acción"
    },
    {
      category: "Autos"
    }
    
  ]
    
  imageUrlArray:string[]=[   
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-17.jpg",
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-65.jpg",
    "https://nextshark-vxdsockgvw3ki.stackpathdns.com/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-59.jpg"
  ];

  
  
}
