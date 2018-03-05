import {Component, Input, OnInit} from '@angular/core';
import {ShopService} from "../shop.service";
import {ShopItem} from "./shopItem";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  @Input() shopItems: ShopItem[] = [];

  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.shopItems = this.shopService.getShopItems();
  }

}
