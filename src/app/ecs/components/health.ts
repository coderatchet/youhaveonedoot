import {Component} from "../Component";

export class Health extends Component {
  constructor(public health?: number) {
    super();
    this.health = health ? health : 100.0;
  }
}

Component.all.set(Health.name, new Set());
