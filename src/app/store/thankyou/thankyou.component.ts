import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/localstorage.service';
import { products } from 'src/app/stock';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  totalPrice = 0;
  cartList;
  constructor(
    private localStorage : LocalstorageService
  ) { }

  ngOnInit(): void {
    this.cartList = this.localStorage.loadFromLocalStorage('cartlist');
    this.computeTotalPrice();
  }
  computeTotalPrice() {
    for (let index = 0; index < this.cartList.length; index++) {
      this.totalPrice += this.cartList[index].price * this.cartList[index].quantity;

    }
  }
}
