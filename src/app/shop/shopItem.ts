import {ThingType} from "../unit-type";
import {Cost} from "../types";

export class ShopItem {
  constructor(public thing: ThingType, public cost: Cost[]) {
  }
}
