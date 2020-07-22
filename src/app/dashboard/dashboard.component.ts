import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from './../models/user.model';

import { map, tap } from 'rxjs/operators';
import { LocalStorageService } from '../services/localtorages.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private localStorage: LocalStorageService,private router: Router){

    }
  ngOnInit(): void {

  }
  crearEmprendimiento(){
    this.router.navigateByUrl('/new-startup');
    
  }
}

  /*
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
    this.afs
      .collection('users')
      .doc(this.localStorage.getUid())
      .snapshotChanges()
      .pipe(map((r) => r.payload.data()))
      .subscribe((x) => console.log(x));
  }*/

