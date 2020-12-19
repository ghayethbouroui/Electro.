import { Component, Input, OnInit } from '@angular/core';
import { CarteService } from 'src/app/carte.service';
import { WhishlistService } from 'src/app/whishlist.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product;
  @Input() id;

  constructor(
    private cartService: CarteService,
    private wishService: WhishlistService
  ) {

  }

  ngOnInit(): void {

  }

  addToCartList(prod) {
    this.cartService.addToCartList(prod);
  }
  addToWishList(prod) {
    this.wishService.addToWishList(prod);
  }
}
