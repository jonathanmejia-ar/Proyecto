import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserInput } from '../models/user-input.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: UserInput = { username: '', password: '' };
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }


  login() {
    console.log(this.model)
  }
}
