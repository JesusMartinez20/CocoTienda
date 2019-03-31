import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  user_data:any[]=[
    {
      FirstName:"Ismael",
      LastName:"Lopez",
      UserName:"Coco",
      Email:"yareplico@distribuidos.coco",
    },
  ];

}
