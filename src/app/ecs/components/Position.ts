import {Component} from "../Component";

export class Position extends Component {
  public static name: string = "position";

  constructor(public x: number, public y: number) {
  }
}

Component.all[Position.name] = new Set<>();
