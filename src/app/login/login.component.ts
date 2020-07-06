import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { UserInput } from '../models/user-input.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { LocalStorageService } from '../services/localtorages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: UserInput = { username: '', password: '', confirmPassword: '' };
  constructor(public afAuth: AngularFireAuth, private router: Router, private auth: AuthService,
    private localStorage: LocalStorageService) { }

  ngOnInit(): void {
  }



  login() {
    return this.afAuth.signInWithEmailAndPassword(this.model.username, this.model.password)
      .then((result) => {
        if (result) {
          this.localStorage.setItem('uid', result.user.uid)
          this.router.navigate(['/dashboard']);
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  loginGmail() {
    this.auth.googleSignin().then(_ => {
      this.router.navigate(['/dashboard']);
    })
  }


}
