import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormControl} from '@angular/forms';
import { EditUserService } from './../Services/edit-user.service'


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']

})
export class EditUserComponent implements OnInit {

  hide = true;
  correo = new FormControl('', [Validators.required, Validators.email]);

  urlGetUsers="";
  urlPostUsers="";
  urlGetStates="";

 data:any;
 
 /*[]=[
    {
      nombre: "YoMero",
      apellidoPaterno: "Daddy",
      apellidoMaterno: "Mommy",
      nombreUsuario: "Guacamero",
      correo: "Depresion@ceti.proyecto",
      contrasena: "solomititulopls",
      direccion: "Cocolinas de los MoMolinos",
      CP: "12345",
      municipio: "GDL",
      estado: "Zacatecas",
    }
 ];*/

  constructor(private http:EditUserService) { }

  EditUser : FormGroup;
  ngOnInit() {
    this.EditUser = new FormGroup({
      nombre: new FormControl(),
      apellidoPaterno: new FormControl(),
      apellidoMaterno: new FormControl(),
      nombreUsuario: new FormControl(),
      correo: this.correo,
      contrasena: new FormControl(),
      direccion: new FormControl(),
      CP: new FormControl(),
      municipio: new FormControl(),
      estado: new FormControl(),
    });

    this.http.urlA=this.urlGetUsers;
    this.data=this.http.getUsersMethod().subscribe(d=>this.info=d);


    this.http.urlB=this.urlGetStates;
    this.estados=this.http.getStatesMethod();
  }




  info:any;  
  estados:any;
  /*[]=[
    {id:1,estado:'Jalisco'},
    {id:2,estado:'Michoacsan'},
    {id:3,estado:'Tlaxcala'},
  ];*/
  
  onSubmit(){
    console.log(this.EditUser.value);
    let form = JSON.stringify(this.EditUser.value);
    console.log(form);
    this.http.urlA = this.urlPostUsers;
    this.http.postUsersMethod(form);
  }



  getErrorMessage() {
    return this.correo.hasError('required') ? 'Debe ingresar un valor' :
        this.correo.hasError('email') ? 'Correo invalido' :
            '';
  }
}