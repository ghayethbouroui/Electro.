import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  saveToLocalStorage(x:string,y) {
    localStorage.setItem(x, JSON.stringify(y));
  }

  loadFromLocalStorage(x : string) {
    return JSON.parse(localStorage.getItem(x))|| [];
  }

  clearLocalStorage(x : string) {
    localStorage.removeItem(x);
  }
}
