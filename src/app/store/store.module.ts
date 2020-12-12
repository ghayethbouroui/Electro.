import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartlistComponent } from './cartlist/cartlist.component';


@NgModule({
  declarations: [StoreComponent, ProductsDetailsComponent, WishlistComponent, CartlistComponent],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
