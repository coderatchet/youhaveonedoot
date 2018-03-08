import {Component} from "../Component";
import {SortedSet} from "collections/sorted-set"

export class GrowingQuantity extends Component {
  public quantity: number;

  constructor(private initialQuantity?: number) {
    super();
    this.quantity = initialQuantity ? initialQuantity : 0;
  }
}

Component.all[GrowingQuantity.name] = new SortedSet();
