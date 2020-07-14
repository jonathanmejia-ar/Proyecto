import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from './../models/user.model';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { map, tap } from 'rxjs/operators';
import { LocalStorageService } from '../services/localtorages.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  imgJoly: string;
  constructor(
    private afs: AngularFirestore,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.afs
      .collection('emprendimientos')
      .snapshotChanges()
      .subscribe((x: any) => {
        // this.imgJoly = x[0].payload.doc.data().downloadURL;
      });
  }

  crearEmprendimiento() {
    this.router.navigateByUrl('/add');
    //console.log("+1 emprendimiento")
    /*
    this.afs.firestore.collection('users').where('uid', '==', 'giVbspbxjlY0KNs1X1e1pFmuDjj1').get()
    .then(res=>{
     res.docs.map(u => 
     //console.log(u.data()))
      //where('user', '==', 'uiJdxtQSIab5I2yZpPU6OZksXaN2').get()
      
    })*/

    //this.afs.firestore.collection('users').where('uid', '==', 'giVbspbxjlY0KNs1X1e1pFmuDjj1').snapshotChanges()
    this.afs
      .collection('users')
      .doc(this.localStorage.getUid())
      .snapshotChanges()
      .pipe(map((r) => r.payload.data()))
      .subscribe((x) => console.log(x));
  }
}
