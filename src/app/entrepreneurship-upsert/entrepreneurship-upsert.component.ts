import { EntrepreneurshipUpsertService } from './entrepreneurship-upsert.service';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/localtorages.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrepreneurship-upsert',
  templateUrl: './entrepreneurship-upsert.component.html',
  styleUrls: ['./entrepreneurship-upsert.component.css'],
})
export class EntrepreneurshipUpsertComponent implements OnInit {
  model: any = { name: '', category: '', description: '', images: [], uid: this.localStorageService.getUid() };
  //model: any = {name: ''}

  startupList = [];
  constructor(
    private router: Router,
    private entrepreneurshipService: EntrepreneurshipUpsertService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {

  }
  upsertEntrepreneurship() {
    this.localStorageService.getUid()

    console.log(this.model);
    this.entrepreneurshipService.newStartupService(this.model).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('/dashboard');
      },
      err => console.log(err));
  }
}

/*
  this.authService.registerService(this.model).subscribe(
      res =>{
        console.log(res)
        localStorage.setItem('token',res.token);
        this.router.navigateByUrl('/dashboard');
      },
      err => console.log(err)
    )


  ngOnInit(): void {
    this.model.uid = this.localStorageService.getUid();
    this.entrepreneurshipService.getEntrepreneurship();
    this.entrepreneurshipService.getEntrepreneurshipUser();
    this.entrepreneurshipService.test().subscribe((x) => {
      x.docs.forEach((element) => {
        console.log(element.data());
      });
    });

  }

  public upsertEntrepreneurship() {
    this.entrepreneurshipService.saveStartup(this.model,this.model.uid);
  }
}*/