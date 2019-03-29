import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup-register',
  templateUrl: './signup-register.component.html',
  styleUrls: ['./signup-register.component.css']
})
export class SignupRegisterComponent implements OnInit {

  constructor() { }

  Usersignup : FormGroup;
  ngOnInit() {
    this.Usersignup = new FormGroup({
        Name: new FormControl(),
        Lastname: new FormControl(),
        User: new FormControl(),
        Password: new FormControl(),
        Confirmation: new FormControl(),
        Email: new FormControl(),
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
  }

}