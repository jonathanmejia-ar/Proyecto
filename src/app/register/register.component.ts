import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { UserInput } from '../models/user-input.model';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/localtorages.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: UserInput = { username: '', password: '', confirmPassword: '' };
  username_lastname: string
  constructor(private afAuth: AngularFireAuth, private router: Router, private localStorageService: LocalStorageService,
    private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

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

}
