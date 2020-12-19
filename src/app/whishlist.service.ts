import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class WhishlistService {

  wishList;
  constructor(
    private localStorage : LocalstorageService,
    
  ) {
    this.wishList = this.localStorage.loadFromLocalStorage('wishlist') ;
   }
  clearwishlist(){
    this.localStorage.clearLocalStorage('wishlist');
    window.location.reload();
  }
  addToWishList(prod){
    for (let index = 0; index < this.wishList.length; index++) {
      if (this.wishList[index].productName == prod.productName) {
        this.localStorage.saveToLocalStorage('wishlist',this.wishList);
          
        return
      }
    }
    this.wishList.push(prod);
    this.localStorage.saveToLocalStorage('wishlist',this.wishList);
    window.location.reload();
  }
  
}
