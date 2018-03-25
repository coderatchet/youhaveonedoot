import {Injectable} from '@angular/core';
import {StateService} from "./state.service";

type PurchaseFunction = (amount: number) => void;

@Injectable()
export class ShopService {

  private static readonly UPGRADE_MAP = "upgrades";
  private static readonly DOOT_CLICKER = "DootClicker";
  private upgradeMap: Map<string, PurchaseFunction> = new Map();

  constructor(private stateService: StateService) {
    this.setupUpgradeMap();
  }

  private setupUpgradeMap() {
    this.upgradeMap.set(ShopService.DOOT_CLICKER, this.buyDootClicker);
  }

  public buy(name: string, amount: number) {
    console.debug(`Buying ${amount} ${name}${amount > 1 ? 's' : ''}`);
    if (this.upgradeMap.has(name)) {
      this.upgradeMap.get(name)(amount);
    }
  }

  private buyDootClicker(amount: number) {
    console.debug(`purchasing ${amount} doot clickers`);
    let existingAmount: number = this.getAmount(ShopService.DOOT_CLICKER);
    console.debug(`existing amount: ${existingAmount}`);
    existingAmount += amount;
    console.debug(`new amount: ${existingAmount}`);
    this.setAmount(ShopService.DOOT_CLICKER, existingAmount);
  }

  private static getStatePath(name: string): string {
    return `${ShopService.UPGRADE_MAP}.${name}`;
  }

  private getAmount(name: string): number {
    return this.stateService.getState(ShopService.getStatePath(name)) as number
  }

  private setAmount(name: string, amount: number) {
    this.stateService.setState(ShopService.getStatePath(name), amount);
  }
}
