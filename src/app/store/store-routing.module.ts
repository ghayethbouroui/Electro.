import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsDetailsComponent } from './products-details/products-details.component';

import { StoreComponent } from './store.component';

const routes: Routes = [
  { path: '', component: StoreComponent },
  { path: 'product-detail/:id',component: ProductsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
