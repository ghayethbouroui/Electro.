import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';
import { products } from '../stock';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {


  productList = products;
   wishList ; 
   cartList;
  constructor(
    private localStorage: LocalstorageService
  ) { 
   
  }

  ngOnInit(): void {
    this.wishList = this.localStorage.loadFromLocalStorage('wishlist') ;
    this.cartList = this.localStorage.loadFromLocalStorage('cartlist');
  }
addToWishList(prod){
  for (let index = 0; index < this.wishList.length; index++) {
    if (this.wishList[index].productName == prod.productName) {
      this.wishList[index].quantity ++;
      this.localStorage.saveToLocalStorage('wishlist',this.wishList);
        
      return window.location.reload();
      
    }
  }
  this.wishList.quantity = 1;
  this.wishList.push(prod);
  this.localStorage.saveToLocalStorage('wishlist',this.wishList);
  window.location.reload();
}
addToCartList(prod){
  for (let index = 0; index < this.cartList.length; index++) {
    if (this.cartList[index].productName == prod.productName) {
      this.cartList[index].quantity ++;
      this.localStorage.saveToLocalStorage('cartlist',this.cartList);
        
      return window.location.reload();
      
    }
  }
  this.cartList.quantity = 1;
  this.cartList.push(prod);
  this.localStorage.saveToLocalStorage('cartlist',this.cartList);
  window.location.reload();
}
}
