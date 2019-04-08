import { Component, OnInit } from '@angular/core';
import { UserService } from './../../Services/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user_data:any;
  urlGet="";
  constructor(private http:UserService) { }

  ngOnInit() {


    this.http.url=this.urlGet;
    this.user_data=this.http.getMethod();


  }
  /*user_data:any[]=[
    {
      FirstName:"Ismael",
      LastName:"Lopez",
      UserName:"Coco",
      Email:"yareplico@distribuidos.coco",
    },
  ];*/

}
