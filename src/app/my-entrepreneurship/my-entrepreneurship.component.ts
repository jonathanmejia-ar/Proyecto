import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/localtorages.service';
import { MyEntrepreneurshipService } from './my-entrepreneurship.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-entrepreneurship',
  templateUrl: './my-entrepreneurship.component.html',
  styleUrls: ['./my-entrepreneurship.component.css']
})
export class MyEntrepreneurshipComponent implements OnInit {

  startupList: [] = []
  constructor(private router: Router, private localStorageService: LocalStorageService, private service: MyEntrepreneurshipService) { }



  ngOnInit(): void {

    this.service.startupListService().subscribe(x => {
      this.startupList = x
      console.log(x)
    });
  }

  deleteStartup(startup: string) {
    this.service.deleteService(startup).subscribe(
      res => {

        console.log(res)
        //this.router.navigateByUrl('/my-startups');
        window.location.reload();
      }
      ,
      err => console.log(err)
    )
  }

}
/*
ngOnInit(): void {
  const refuid = this.localStorageService.getUid()
  console.log(refuid)


  this.firestore.collection('users').doc(refuid).get().subscribe(x=>(this.startupList=x.data().startupList))
}
*/


