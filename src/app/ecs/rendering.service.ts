import {Injectable, OnInit} from '@angular/core';
import {StateService} from "../state.service";
import {Entity} from "./Entity";
import {GrowingQuantity} from "./components/growingQuantity";
import {Position} from "./components/position";
import {NumberDisplayService} from "../number-display.service";
import {DrawFunction} from "./components/Renderable2D";

@Injectable()
export class RenderingService implements OnInit {
  constructor(private stateService: StateService, private numberDisplayService: NumberDisplayService) {
  }

  public getNumberRenderer(): DrawFunction {
    return this.stateService.getState("rendering.number") as DrawFunction
  }

  ngOnInit(): void {
    this.stateService.setState("rendering.number", (ctx: CanvasRenderingContext2D, entity: Entity) => {
      let gq: GrowingQuantity = entity.getComponent(GrowingQuantity) as GrowingQuantity;
      let position: Position = entity.getComponent(Position) as Position;
      if(!gq) {
        throw new Error("attempted to render a number without quantity");
      } else if (!position) {
        throw new Error("attempted to render a number without position");
      }
      ctx.font = "20px Georgia";
      ctx.fillText(this.numberDisplayService.displayNumber(gq.quantity), position.x, position.y);
    });
  }

}
