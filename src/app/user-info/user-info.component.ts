import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: boolean = false; //False = Admin | True = Client or Guest
  constructor() { }

  ngOnInit() {
  }

}
