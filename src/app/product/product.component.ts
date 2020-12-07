import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/stock';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList = products;
  constructor() { }

  ngOnInit(): void {

  }

}
