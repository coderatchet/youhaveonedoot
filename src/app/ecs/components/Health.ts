import {Component} from "../Component";

export class Health extends Component {
  public static name: string = "health";

  constructor(public health?: number) {
    this.health = health ? health : 100.0;
  }
}

Component.all[Health.name] = new Set<>();
