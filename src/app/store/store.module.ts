import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductItemComponent } from './product-item/product-item.component';
import { ThankyouComponent } from './thankyou/thankyou.component';


@NgModule({
  declarations: [StoreComponent, ProductsDetailsComponent, WishlistComponent, CartlistComponent, CustomerInfoComponent, ProductItemComponent, ThankyouComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class StoreModule { }
