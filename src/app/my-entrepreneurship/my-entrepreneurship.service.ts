import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../services/localtorages.service';



@Injectable({
  providedIn: 'root'
})
export class MyEntrepreneurshipService {

  private URL = 'http://localhost:4000/api'

  constructor(private localstorage: LocalStorageService, private http: HttpClient) {

  }
  startupListService2() {
    return this.http.get<any>(this.URL + '/all-startups');
  }
  startupListService() {
    return this.http.get<any>(this.URL + `/${this.localstorage.getUid()}` + '/mist');
  }

  editStartupService(startup) {
    return this.http.put<any>(this.URL + '/edit' + `/${startup._id}`, startup);
  }

  deleteService(startup_id) {
    return this.http.delete<any>(this.URL + '/delete' + `/${startup_id}`);
  }

}
