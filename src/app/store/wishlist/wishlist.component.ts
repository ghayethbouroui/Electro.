import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/localstorage.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlist;
  cartList;
  constructor(
    private localStorage : LocalstorageService
  ) { }

  ngOnInit(): void {
    this.wishlist = this.localStorage.loadFromLocalStorage('wishlist');
    this.cartList = this.localStorage.loadFromLocalStorage('cartlist');
  }
clearwishlist(){
  this.localStorage.clearLocalStorage('wishlist');
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
