import { LocalstorageServiceService } from './../../services/localstorage-service.service';

import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  username: string
  constructor(private router: Router, public afAuth: AngularFireAuth, private localStorage: LocalstorageServiceService) { }

  ngOnInit(): void {

    this.username = this.localStorage.getCurrentUser()


  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }



}
