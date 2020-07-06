
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LocalStorageService } from '../../services/localtorages.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  username: string
  constructor(private router: Router, public afAuth: AngularFireAuth, private localStorage: LocalStorageService) { }

  ngOnInit(): void {


  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
      localStorage.clear();
    });
  }



}
