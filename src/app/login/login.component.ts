import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { UserInput } from '../models/user-input.model';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: UserInput = { username: '', password: '' };
  constructor(public afAuth: AngularFireAuth, private router: Router, private auth: AuthService) { }

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

  loginGmail() {
    this.auth.googleSignin().then(x => {
      this.router.navigate(['/dashboard']);
    })
  }
}
