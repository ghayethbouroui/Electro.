import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { products } from "../../stock"
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  product;
  constructor(
    private route : ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.product = products[params['id']];
        console.log(this.product);
      });
  }

}
