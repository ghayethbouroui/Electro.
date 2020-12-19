import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  wishlist;
  qty = 0;
  constructor(
    private localstorage : LocalstorageService,
    public auth: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.wishlist = this.localstorage.loadFromLocalStorage('wishlist');
    for (let index = 0; index < this.wishlist.length; index++) {
      this.qty ++;
      
    }
  }

}
