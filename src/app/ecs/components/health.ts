import {Component} from "../Component";
import {SortedSet} from "collections/sorted-set"

export class Health extends Component {
  constructor(public health?: number) {
    super();
    this.health = health ? health : 100.0;
  }
}

Component.all[Health.name] = new SortedSet();
