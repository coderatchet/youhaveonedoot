import {Component} from "../Component";
import {SortedSet} from "collections/sorted-set"

export class Position extends Component {
  constructor(public x: number, public y: number) {
    super();
  }
}

Component.all[Position.name] = new SortedSet();
