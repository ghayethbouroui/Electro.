import { Component, OnInit } from '@angular/core';
import { CarteService } from 'src/app/carte.service';
import { LocalstorageService } from 'src/app/localstorage.service';
import { WhishlistService } from 'src/app/whishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlist;

  constructor(
    private localStorage: LocalstorageService,
    private wishList: WhishlistService,
    private cartList: CarteService
  ) { }

  ngOnInit(): void {
    this.wishlist = this.localStorage.loadFromLocalStorage('wishlist');
  }
  clearwishlist() {
    this.wishList.clearwishlist();
  }
  addToCartList(prod) {
    this.cartList.addToCartList(prod);
  }
}
