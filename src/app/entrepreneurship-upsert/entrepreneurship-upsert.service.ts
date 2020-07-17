import { LocalStorageService } from './../services/localtorages.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { firestore } from 'firebase/app';
import { generate } from 'shortid';

@Injectable({
  providedIn: 'root',
})
export class EntrepreneurshipUpsertService {
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
  /*
  public saveEntrepreneurship(entrepreneurship){
     this.firestore.collection('entrepreneurship').doc(entrepreneurship.uid).set(entrepreneurship)
   
    // aca se le va a pegar a firebase con un add
  }
*/
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
    let id = generate()
    this.firestore.collection('users').doc(uid).update({
      startupList: firestore.FieldValue.arrayUnion(entrepreneurship)
<<<<<<< HEAD
      


    })
=======
    }).then(x => console.log(x))
>>>>>>> c47e7bdaccc6d0ab4e96c050d2a9be8bb61a6a77
  }
}
