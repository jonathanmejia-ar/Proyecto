import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntrepreneurshipUpsertService {

  constructor(private firestore: AngularFirestore) { }


  public getCategoriesJson() {
    // aca va el json de categorias robar de mercadolibre ??
    return of({})
  }



  public saveEntrepreneurship(entrepreneurship): Observable<any> {
    this.firestore.collection('entrepreneurship').doc(entrepreneurship.uid).set(entrepreneurship)
    // aca se le va a pegar a firebase con un add
  }

  editEntrepreneurship(entrepreneurship) {
    this.firestore.collection('entrepreneurship').doc(entrepreneurship.uid).set(entrepreneurship)
    // aca se le pega a firebase con un update
  }
}
