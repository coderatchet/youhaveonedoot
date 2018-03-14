import {System} from "../system";
import {Entity} from "../Entity";
import {FrameData} from "../../frame-data";
import {GrowingQuantity} from "../components/growingQuantity";

export class Growth implements System {
  private lastUpdate: number = 0;

  /**
   * Milliseconds that should pass before an update to an entity should occur.
   * @type {number}
   */
  private updateInterval: number = 1000;

  process(frameData: FrameData, entries: Iterator<Entity>): void {
    let lastupdateSeconds: number = frameData.currentTFrame - this.lastUpdate;
    if(lastupdateSeconds > 1000) {
      entries.map(item => item.getComponent(GrowingQuantity)).filter(x => !!x).forEach(entity => {

      });
    }
  }

  components(): string[] {
    return null;
  }
}
