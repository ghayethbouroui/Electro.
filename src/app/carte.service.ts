import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class CarteService {

  cartList;
  constructor(
    private localStorage: LocalstorageService,
  ) {
    this.cartList = this.localStorage.loadFromLocalStorage('cartlist');
  }
  addToCartList(prod) {
    for (let index = 0; index < this.cartList.length; index++) {
      if (this.cartList[index].productName == prod.productName) {
        this.cartList[index].quantity++;
        this.localStorage.saveToLocalStorage('cartlist', this.cartList);

        return 
      }
    }
    this.cartList.quantity = 1;
    this.cartList.push(prod);
    this.localStorage.saveToLocalStorage('cartlist', this.cartList);
  }
  clearCart() {
    this.localStorage.clearLocalStorage('cartlist');
    window.location.reload();
  }
  clearFromCart(index){

        if (window.confirm('Are you sure you want to delete the item?')) {
          this.cartList.splice(index,1); 
          this.localStorage.saveToLocalStorage('cartlist',this.cartList); 
          window.location.reload();  
        }
        // If the user doesn't want to delete the product, hits the CANCEL button
        else {
          return;
        }
  }
}

