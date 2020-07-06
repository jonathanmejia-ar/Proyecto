import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from './../models/user.model';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
  }

  crearEmprendimiento() {

    //console.log("+1 emprendimiento")
    /*
    this.afs.firestore.collection('users').where('uid', '==', 'giVbspbxjlY0KNs1X1e1pFmuDjj1').get()
    .then(res=>{
     res.docs.map(u => 
     //console.log(u.data()))
      //where('user', '==', 'uiJdxtQSIab5I2yZpPU6OZksXaN2').get()
      
    })*/

    //this.afs.firestore.collection('users').where('uid', '==', 'giVbspbxjlY0KNs1X1e1pFmuDjj1').snapshotChanges()
    this.afs.collection('users').doc('giVbspbxjlY0KNs1X1e1pFmuDjj1').snapshotChanges().pipe(map(r => r.payload.data())).subscribe(x => console.log(x))



  }
}
