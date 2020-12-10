import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  saveToLocalStorage(wishlist) {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }

  loadFromLocalStorage() {
    return JSON.parse(localStorage.getItem('wishlist'))|| [];
  }

  clearLocalStorage() {
    localStorage.removeItem('wishlist');
  }
}
