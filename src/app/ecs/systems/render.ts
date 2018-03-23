import {System} from "../system";
import {FrameData} from "../../frame-data";
import {Entity} from "../Entity";
import {Renderable2D} from "../components/Renderable2D";

export class Render implements System {

  /**
   * number of frames before updating.
   * @type {number}
   */
  private updateInterval: number = 1;
  private lastFrameUpdated: number = 0;

  process(frameData: FrameData, entries: Iterator<Entity>): void {
    let canvas = Render.getCanvas();
    Render.getContext2D().clearRect(0, 0, canvas.width, canvas.height);
    if (frameData.currentFrame - this.lastFrameUpdated === this.updateInterval) {
      let result: IteratorResult<Entity> = entries.next();
      while (!result.done) {
        let entity: Entity = result.value;
        if (entity.hasComponent(Renderable2D)) {
          let renderable2D = entity.getComponent(Renderable2D) as Renderable2D;
          renderable2D.draw(Render.getContext2D(), entity);
        }
        result = entries.next();
      }
      this.lastFrameUpdated = frameData.currentFrame;
    }
  }

  components(): string[] {
    return undefined;
  }

  private static getContext2D(): CanvasRenderingContext2D {
    return this.getCanvas().getContext("2d");
  }

  private static getCanvas(): HTMLCanvasElement {
    return document.getElementById("mainScene") as HTMLCanvasElement;
  }

}
