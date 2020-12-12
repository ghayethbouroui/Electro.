import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { LocalstorageService } from 'src/app/localstorage.service';
import { products } from "../../stock"
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  product;
  cartList;
  constructor(
    private route : ActivatedRoute,
    private localStorage: LocalstorageService

  ) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.product = products[params['id']];
        console.log(this.product);
      });
      this.cartList = this.localStorage.loadFromLocalStorage('cartlist');
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
