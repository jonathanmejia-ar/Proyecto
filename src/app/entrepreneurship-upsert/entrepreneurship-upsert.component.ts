import { EntrepreneurshipUpsertService } from './entrepreneurship-upsert.service';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/localtorages.service';

@Component({
  selector: 'app-entrepreneurship-upsert',
  templateUrl: './entrepreneurship-upsert.component.html',
  styleUrls: ['./entrepreneurship-upsert.component.css']
})
export class EntrepreneurshipUpsertComponent implements OnInit {
  model: any = { name: '', category: '', description: '', images: [], uid: '' }
  constructor(private entrepreneurshipService: EntrepreneurshipUpsertService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.model.uid = this.localStorageService.getUid()

  }

  public upsertEntrepreneurship() {
    this.entrepreneurshipService.saveEntrepreneurship(this.model).subscribe(x => {
      console.log(x)
    })


    console.log(this.model)
  }

}
