import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UserInput } from '../models/user-input.model';
import { LocalStorageService } from '../services/localtorages.service';
import { AuthService } from './../services/auth.service';
import { UserLogin } from './../models/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: UserLogin = { email: '', password: '' };

  constructor(private router: Router,
    private authService: AuthService,
    private localStorage: LocalStorageService) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.model);
    this.authService.loginService(this.model).subscribe(res => {
      console.log(res)
      localStorage.setItem('token', res.token);
      localStorage.setItem('uid', res.userId);
      this.router.navigateByUrl('/dashboard');
    },
      err => console.log(err))
  }

  loginGmail() {

  }
}

/*
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

*/

