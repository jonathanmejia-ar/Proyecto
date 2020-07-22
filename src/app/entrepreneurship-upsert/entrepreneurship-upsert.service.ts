import { LocalStorageService } from './../services/localtorages.service';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class EntrepreneurshipUpsertService {

  private URL = 'http://localhost:4000/api'

  constructor(private http: HttpClient, private localStorageService: LocalStorageService){
    
  }
  
  newStartupService(startup){
    return this.http.post<any>(this.URL + '/new-startup', startup,{responseType:'json'});
}
}

  /*
  constructor(
    private firestore: AngularFirestore,
    private localStorageService: LocalStorageService

  ) { }

  public getCategoriesJson() {
    // aca va el json de categorias robar de mercadolibre ??
    return of({});
  }

  public getEntrepreneurshipUser() {
    return this.firestore
      .collection('entrepreneurship')
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data();
            console.log(data);
          });
        })
      );
  }

  public getEntrepreneurship() {
    this.firestore
      .collection('entrepreneurship')
      .doc('liMV2pyCoIR6KtVkdgEdnjapMgI2')
      .collection('entrepreneurship_collection')
      .get()
      .toPromise()
      .then((response) => {
        response.forEach((document) => {
          console.log(document.data());
        });
      });
  }
  public test(): Observable<any> {
    return this.firestore.collection('users').get();
  }
  
  public saveEntrepreneurship(entrepreneurship) {
    this.firestore
      .collection('entrepreneurship')
      .doc(entrepreneurship.uid)
      .collection('entrepreneurship_list')
      .add(entrepreneurship);

    // aca se le va a pegar a firebase con un add
  }

  editEntrepreneurship(entrepreneurship) {
    this.firestore
      .collection('entrepreneurship')
      .doc(entrepreneurship.uid)
      .set(entrepreneurship);
    // aca se le pega a firebase con un update
  }

  public saveStartup(entrepreneurship, uid) {

    this.firestore.collection('users').doc(uid).update({
      startupList: firestore.FieldValue.arrayUnion(entrepreneurship)   

    })
  }*/

