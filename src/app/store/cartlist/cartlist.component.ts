import { Component, OnInit } from '@angular/core';
import { CarteService } from 'src/app/carte.service';
import { LocalstorageService } from 'src/app/localstorage.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {

  cartList;
  totalPrice = 0;
  constructor(
      private cartlist : CarteService,
      private localStorage : LocalstorageService
  ) {}
   

  ngOnInit(): void {
    this.cartList = this.localStorage.loadFromLocalStorage('cartlist');
    this.computeTotalPrice();
  }
  clearCart(){
    this.cartlist.clearCart();
  }
  computeTotalPrice() {
    for (let index = 0; index < this.cartList.length; index++) {
      this.totalPrice += this.cartList[index].price * this.cartList[index].quantity;

    }
  }
}
