import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './../../Services/login.service';

@Component({
  selector: 'app-signup-register',
  templateUrl: './signup-register.component.html',
  styleUrls: ['./signup-register.component.css']
})
export class SignupRegisterComponent implements OnInit {
  urlP="/usuarios"
  
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private http:LoginService) { }

  Usersignup : FormGroup;
  ngOnInit() {
    this.Usersignup = new FormGroup({
        nombre: new FormControl(),
        apellidoPaterno: new FormControl(),
        apellidoMaterno: new FormControl(),
        nombreUsuario: new FormControl(),
        contrasena: new FormControl(),
        correo: this.email,
        CP: new FormControl(),
        ciudad: new FormControl(),
        direccionYNumero: new FormControl(),
        tarjeta: new FormControl()
    });

  }

  onSubmit(){
    console.log(this.Usersignup.value)
    let form = JSON.stringify(this.Usersignup.value)
    console.log(form);
    this.http.url=this.urlP;
    //this.http.postMethod(form);
    localStorage.setItem('userId', '');
    localStorage.getItem('userId');
    this.http.createUser(form).subscribe(d => console.log(d));
  }
  
  getErrorMessage() {
    return this.email.hasError('required') ? '' :
        this.email.hasError('email') ? 'Correo invalido' :
            '';
  }
}