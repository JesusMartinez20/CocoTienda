import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './../../Services/login.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-signup-register',
  templateUrl: './signup-register.component.html',
  styleUrls: ['./signup-register.component.css']
})
export class SignupRegisterComponent implements OnInit {
  urlP="/usuarios"
  
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private http:LoginService, private router : Router) { }

  Usersignup : FormGroup;
  ngOnInit() {
    this.Usersignup = new FormGroup({
        nombre: new FormControl(),
        apellidoPaterno: new FormControl(),
        apellidoMaterno: new FormControl(),
        nombreUsuario: new FormControl(),
        contrasena: new FormControl(),
        confirmacion: new FormControl(),
        correo: this.email,
        CP: new FormControl(),
        ciudad: new FormControl(),
        direccionYNumero: new FormControl(),
        tarjeta: new FormControl(),
        fechaExpiracion: new FormControl()
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
    this.http.createUser(form).subscribe(token=>{localStorage.setItem('token',token.token)
    this.router.navigate(['/user-info']);});
    
  }
  
  getErrorMessage() {
    return this.email.hasError('required') ? '' :
        this.email.hasError('email') ? 'Correo invalido' :
            '';
  }

 


  private passwordsMatch = (_form: FormGroup): boolean => {
    if (_form.controls['contrasena'].touched && _form.controls['confirmacion'].touched) {
        if (_form.value.contrasena === _form.value.confirmacion) {
            return true;
        } else {
            return false;
        }
    }
    return true;
}
/*
 validarSiNumero(numero){
    if (!/^([0-9])*$/.test(numero))
      alert("El valor " + numero + " no es un número");
  }*/


 
}