import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  categories=[
    {name:"Drones"},
    {name:"Muñecas"},
    {name:"Pelotas"},
    {name:"Figuras de acción"},
    {name:"Carros"},
  ]
}
