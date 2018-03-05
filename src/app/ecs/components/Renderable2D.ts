import {Component} from "../Component";
import {Entity} from "../Entity";

export type DrawFunction = (ctx: CanvasRenderingContext2D, entity: Entity) => void
export class Renderable2D extends Component {
  constructor(public readonly draw: DrawFunction) {
    super();
  }
}

Component.all.set(Renderable2D.name, new Set());
