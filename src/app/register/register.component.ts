
import { Component, OnInit } from '@angular/core';
import { UserInput } from '../models/user-input.model';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/localtorages.service';
import { AuthService } from './../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: UserInput = { email: '', name: '', password: '', confirmPassword: '' };
  username_lastname: string
  constructor(private authService: AuthService, private router: Router, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.model);

    this.authService.registerService(this.model).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/dashboard');
      },
      err => console.log(err)
    )
  }

  /*
  register(){
    this.authService.register(this.model).subscribe(
      res =>{
        console.log(res)
      },
      err => console.log(err)
    )
  }*/

}
  /*

register() {
  return this.afAuth.createUserWithEmailAndPassword(this.model.username, this.model.password)
    .then((result) => {
      if (result) {
        console.log(result)
        this.insertUserInUserCollection({ email: result.user.email, nombre: this.username_lastname, uid: result.user.uid })
        this.localStorageService.setItem('uid', result.user.uid)
        this.router.navigateByUrl('/dashboard')
      }
    }).catch((error) => {
      window.alert(error.message)
    })
}
//aca jony va a crear una interface para el user a insertar donde va el : any
private insertUserInUserCollection(user: any) {
  this.firestore.collection('users').doc(user.uid).set(user);
}
*/
