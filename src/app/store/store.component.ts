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
  constructor(
   // private localStorage: LocalstorageService
  ) { 
   
  }

  ngOnInit(): void {
    this.wishList = JSON.parse(localStorage.getItem('wishlist'))|| [] ;
  }
addToWishList(prod){
  for (let index = 0; index < this.wishList.length; index++) {
    if (this.wishList[index].productName == prod.productName) {
      this.wishList[index].quantity +=1;
      localStorage.setItem('wishlist' , JSON.stringify(this.wishList));
      alert(prod.productName +'added');
      return;
      
    }
    
  }
  this.wishList.quantity = 1;
  this.wishList.push(prod);
  localStorage.setItem('wishlist',JSON.stringify(this.wishList));
}
}
