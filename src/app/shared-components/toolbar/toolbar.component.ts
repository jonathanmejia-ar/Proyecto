
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/localtorages.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  username: string
  constructor(private authService: AuthService, private router: Router, private localStorage: LocalStorageService) { }

  ngOnInit(): void {

  }
  
  logout(){
    this.authService.logoutService();
    localStorage.clear();
  }

  /*
  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
      localStorage.clear();
    });
  }*/

}
