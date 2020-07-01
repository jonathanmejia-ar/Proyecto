import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageServiceService {

  constructor() { }

  public getCurrentUser() {
    const userStorage = JSON.parse(localStorage.getItem('currentUser'))
    console.log(userStorage)
    return userStorage.displayName ? userStorage.displayName : userStorage.email
  }
}
