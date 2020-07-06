import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
    AngularFirestore,
    AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class AuthService {
    public user$: Observable<any>;

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router
    ) {
        this.user$ = this.afAuth.authState.pipe(
            switchMap(user => {
                if (user) {
                    return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
                    localStorage.setItem('currentUid', user.uid)
                } else {
                    return of(null);
                }
            })
        );
    }

    public async googleSignin() {
        const provider = new auth.GoogleAuthProvider();
        const credential = await this.afAuth.signInWithPopup(provider);
        return this.updateUserData(credential.user);
    }

    private updateUserData(user) {
        // Sets user data to firestore on login
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

        const data = {
            uid: user.uid,
            email: user.email,
            nombre: user.displayName,
        };

        return userRef.set(data, { merge: true });
    }

    public async signOut() {
        await this.afAuth.signOut();
        return this.router.navigate(['/']);
    }
}
