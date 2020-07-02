import { Component, OnInit } from '@angular/core';
import { UserInput } from '../models/user-input.model';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { User } from './../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: UserInput = { username: '', password: '', confirmPassword: ''};
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    return this.afAuth.createUserWithEmailAndPassword(this.model.username, this.model.password)
      .then((result) => {
        if (result) {
          this.router.navigateByUrl('/dashboard')
        }
        console.log(result.user)
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  
}
