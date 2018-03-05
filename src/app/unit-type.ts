export abstract class ThingType {
  constructor(public name: string, public displayName?: string) {
    if(!displayName) {
      this.displayName = name;
    }
  }
}

export class Unit extends ThingType {}
export class Item extends ThingType {}
export class Upgrade extends ThingType {}

/*
 Items
 */

export class Items {
  public static readonly DOOT: Item = new Item("Doot");
}
// export let Doot: Item = new Item("Doot");

/*
 Units
 */

export class Units {
  public static readonly DOOT_CLICKER: Unit = new Unit("DootClicker", "Doot Clicker")
}
