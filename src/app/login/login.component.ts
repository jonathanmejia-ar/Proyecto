import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { Component, OnInit } from '@angular/core';
import { UserInput } from '../models/user-input.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: UserInput = { username: '', password: '' };
  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }



  login() {
    return this.afAuth.signInWithEmailAndPassword(this.model.username, this.model.password)
      .then((result) => {
        if (result) {
          localStorage.setItem('currentUser', JSON.stringify({ username: result.user.displayName, email: result.user.email }))
          this.router.navigate(['/dashboard']);
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }
}
