import {Injectable, OnInit} from '@angular/core';
import {StateService} from "./state.service";
type PurchaseFunction = (amount: number) => void;

@Injectable()
export class ShopService implements OnInit {

  private static readonly UPGRADE_MAP = "upgrades";
  private static readonly DOOT_CLICKER = "DootClicker";
  private upgradeMap: Map<string, PurchaseFunction> = new Map();

  constructor(private stateService: StateService) {
    this.setupUpgradeMap();
  }

  private setupUpgradeMap() {
    upgradeMap.set(ShopService.DOOT_CLICKER, this.buyDootClicker);
  }

  public buy(name: string, amount: number) {
    if(this.upgradeMap.has(name)) {
      this.upgradeMap.get(name)(amount);
    }
  }

  private buyDootClicker(amount: number) {

  }

}
