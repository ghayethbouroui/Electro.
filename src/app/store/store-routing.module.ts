import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartlistComponent } from './cartlist/cartlist.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';

import { StoreComponent } from './store.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component: StoreComponent },
  { path: 'product-detail/:id',component: ProductsDetailsComponent},
  { path: 'wishlist' , component:WishlistComponent},
  { path: 'cartlist', component:CartlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
