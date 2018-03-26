import {Injectable} from '@angular/core';
import {StateService} from "./state.service";
import {ShopItem} from "./shop/shopItem";
import {Items, ThingType, Units} from "./unit-type";
import {Cost} from "./types";

type PurchaseFunction = (amount: number) => void;

@Injectable()
export class ShopService {

  private static readonly UPGRADE_MAP = "upgrades";
  private upgradeMap: Map<string, PurchaseFunction> = new Map();

  constructor(private stateService: StateService) {
    this.setupUpgradeMap();
  }

  private setupUpgradeMap() {
    this.upgradeMap.set(Items.DOOT.name, this.buyDootClicker);
  }

  public buy(thing: ThingType, amount: number) {
    console.debug(`Buying ${amount} ${name}${amount > 1 ? 's' : ''}`);
    if (this.upgradeMap.has(name)) {
      this.upgradeMap.get(name)(amount);
    }
  }

  private buyDootClicker(amount: number) {
    console.debug(`purchasing ${amount} doot clickers`);
    let existingAmount: number = this.getAmount(Items.DOOT);
    console.debug(`existing amount: ${existingAmount}`);
    existingAmount += amount;
    console.debug(`new amount: ${existingAmount}`);
    this.setAmount(Items.DOOT, existingAmount);
  }

  private static getStatePath(name: string): string {
    return `${ShopService.UPGRADE_MAP}.${name}`;
  }

  private getAmount(thing: ThingType): number {
    return this.stateService.getState(ShopService.getStatePath(thing.name)) as number
  }

  private setAmount(thing: ThingType, amount: number) {
    this.stateService.setState(ShopService.getStatePath(thing.name), amount);
  }

  public getShopItems(): ShopItem[] {
    return [
      new ShopItem(Units.DOOT_CLICKER, [new Cost(Items.DOOT, 1)])
    ]
  }
}
