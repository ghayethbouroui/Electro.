import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { LocalstorageService } from '../localstorage.service';
import { products } from '../stock';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {


   // productList = products;
   productList;
   wishList ; 
  
   product:object = {
    "id": 4,
   "productName": "Samsung",
    "price": 999,
    "image" : "product07.png",
    "solde": 0,
    "category" : "Smarphone",
    "description": "Double SIM - Ecran 6.15\" Full HD+ - Résolution: 2312 x 1080p - Processeur Kirin 710 Octa-core, 4 x Cortex-A73 2.2 GHz + 4 x Cortex-A53 1.7 GHz - Android 9.0 - RAM 4 Go - Mémoire 128 Go - Triple caméra arrière: 24 MP + 8 MP + 2 MP - Caméra avant: 32 MP - Wifi - 4G - GPS - Bluetooth - NFC - Lecteur d\"empreinte digitale - Batterie 3340 mAh"
  }

  constructor(private productService: ProductService
   // private localStorage: LocalstorageService
  ) { 
   
  }

  ngOnInit(): void {
    this.productService.deleteProduct(4).subscribe(
      (res) => {
        return this.productList = res;
      }
    );
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
