import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './../../Services/login.service';

@Component({
  selector: 'app-signup-register',
  templateUrl: './signup-register.component.html',
  styleUrls: ['./signup-register.component.css']
})
export class SignupRegisterComponent implements OnInit {
  urlP="/login/login-user-post.php"
  
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private http:LoginService) { }

  Usersignup : FormGroup;
  ngOnInit() {
    this.Usersignup = new FormGroup({
        Name: new FormControl(),
        Paterno: new FormControl(),
        Materno: new FormControl(),
        User: new FormControl(),
        Password: new FormControl(),
        Confirmation: new FormControl(),
        Email: this.email,
        CP: new FormControl(),
        Municipality: new FormControl(),
        Address: new FormControl(),
        State: new FormControl(),
        Card: new FormControl(),
        CVV: new FormControl()
    });

  }

  onSubmit(){
    console.log(this.Usersignup.value)
    let form = JSON.stringify(this.Usersignup.value)
    console.log(form);
    this.http.url=this.urlP;
    this.http.postMethod(form);
  }

  states: string[] = [
    'Aguascalientes','Baja California','Baja California Sur','Campeche','Chiapas','Chihuahua','Coahuila de Zaragoza','Colima','Durango','Estado de México','Guanajuato',
    'Guerrero','Hidalgo','Jalisco','Michoacán','Morelos','Nayarit','Nuevo León','Oaxaca','Puebla','Querétaro','Quintana Roo','San Luis Potosí','Sinaloa','Sonora','Tabasco',
    'Tamaulipas','Tlaxcala','Veracruz','Yucatán','Zacatecas',
  ];
  
  getErrorMessage() {
    return this.email.hasError('required') ? '' :
        this.email.hasError('email') ? 'Correo invalido' :
            '';
  }
}