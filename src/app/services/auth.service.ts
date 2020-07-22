import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LocalStorageService } from './localtorages.service';
import {HttpClient} from '@angular/common/http'

@Injectable({ providedIn: 'root' })

export class AuthService {
    //public user$: Observable<any>;

    private URL = 'http://localhost:4000/api'

    constructor(private http: HttpClient,
         private router: Router,
         private localStorageService: LocalStorageService){
    }

    registerService(user){
       return this.http.post<any>(this.URL + '/signup', user);
    }

    loginService(user){
        return this.http.post<any>(this.URL + '/signin', user);
    }

    loggedIn(){
        return!!localStorage.getItem('token')
    }   
    getToken(){
        return localStorage.getItem('token');
    }

    logoutService(){
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login');
    }
   
}
    /*public user$: Observable<any>;

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router,
        private localStorageService: LocalStorageService
    ) {
        this.user$ = this.afAuth.authState.pipe(
            switchMap(user => {
                if (user) {
                    this.localStorageService.setItem('uid', user.uid)
                    return this.afs.doc<User>(`users/${user.uid}`).valueChanges();

                } else {
                    return of(null);
                }
            })
        );
    }

    public async googleSignin() {
        const provider = new auth.GoogleAuthProvider();
        const credential = await this.afAuth.signInWithPopup(provider);
        return this.updateUserDataInDataBase(credential.user);
    }

    private updateUserDataInDataBase(user) {
        // Sets user data to firestore on login
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

        const data = {
            uid: user.uid,
            email: user.email,
            nombre: user.displayName,
        };
        this.localStorageService.setItem('uid', user.uid)
        return userRef.set(data, { merge: true });
    }

    public async signOut() {
        await this.afAuth.signOut();
        return this.router.navigate(['/']);
    }*/

