import {Component} from "../Component";

export class Position extends Component {
  constructor(public x: number, public y: number) {
    super();
  }
}

Component.all.set(Position.name, new Set());
