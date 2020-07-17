import { EntrepreneurshipUpsertService } from './entrepreneurship-upsert.service';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/localtorages.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-entrepreneurship-upsert',
  templateUrl: './entrepreneurship-upsert.component.html',
  styleUrls: ['./entrepreneurship-upsert.component.css'],
})
export class EntrepreneurshipUpsertComponent implements OnInit {
  model: any = { name: '', category: '', description: '', images: [], uid: '' };
//model: any = {name: ''}

  startupList = [];
  constructor(
    private entrepreneurshipService: EntrepreneurshipUpsertService,
    private localStorageService: LocalStorageService
  ) {}

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
  /*
  public upsertEntrepreneurship() {
    this.entrepreneurshipService.saveEntrepreneurship(this.model);
  }*/
}
