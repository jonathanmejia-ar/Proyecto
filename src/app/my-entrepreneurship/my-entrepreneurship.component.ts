import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/localtorages.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-my-entrepreneurship',
  templateUrl: './my-entrepreneurship.component.html',
  styleUrls: ['./my-entrepreneurship.component.css']
})
export class MyEntrepreneurshipComponent implements OnInit {

  startupList: []= []

  constructor(private firestore: AngularFirestore, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    const refuid = this.localStorageService.getUid()
    console.log(refuid)


    this.firestore.collection('users').doc(refuid).get().subscribe(x=>(this.startupList=x.data().startupList))
    
    
    
  }


}
