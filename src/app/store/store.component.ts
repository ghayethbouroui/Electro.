import { Component, OnInit } from '@angular/core';
import { CarteService } from '../carte.service';
import { LocalstorageService } from '../localstorage.service';
import { products } from '../stock';
import { WhishlistService } from '../whishlist.service';


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
    private localStorage: LocalstorageService,
    private cartService : CarteService ,
    private wishService : WhishlistService,
    
  ) { 
   
  }

  ngOnInit(): void {
    this.wishList = this.localStorage.loadFromLocalStorage('wishlist') ;
    this.cartList = this.localStorage.loadFromLocalStorage('cartlist');
  }

addToCartList(prod){
this.cartService.addToCartList(prod);
}
addToWishList(prod){
  this.wishService.addToWishList(prod);
}
}
