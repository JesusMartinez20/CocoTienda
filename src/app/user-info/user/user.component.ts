import { Component, OnInit } from '@angular/core';
import { UserService } from './../../Services/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user_data:any;
  urlGet="/usuarios";
  constructor(private http:UserService) { }

  ngOnInit() {


    this.http.url=this.urlGet;
    this.user_data = this.http.getMethod();
    

  }

  //No se si esto este bien xd
  ClickCloseSesion(){
    localStorage.removeItem('token');
  }



  /*user_data:any[]=[
    {
      nombre:"IsmzxZXael",
      apellidoPaterno:"Lopez",
      nombreUsuario:"Coco",
      correo:"yareplico@distribuidos.coco",
    },
  ];*/

}
