import {Component, OnInit} from '@angular/core';
import {ShopService} from "../../shop.service";

@Component({
  selector: 'app-shopitem',
  templateUrl: './shopitem.component.html',
  styleUrls: ['./shopitem.component.scss']
})
export class ShopitemComponent implements OnInit {

  constructor(public itemName: string, private shopService: ShopService) {
  }

  ngOnInit() {
  }

  purchase() {
    this.shopService.buy(this.itemName, 1);
  }

}
