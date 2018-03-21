import {Component} from "../Component";

export class GrowingQuantity extends Component {
  public quantity: number;

  readonly ratePerSecond: number = 1;

  constructor(private initialQuantity?: number) {
    super();
    this.quantity = initialQuantity ? initialQuantity : 0;
  }
}

Component.all.set(GrowingQuantity.name, new Set());
