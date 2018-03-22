import {System} from "../system";
import {Entity} from "../Entity";
import {FrameData} from "../../frame-data";
import {GrowingQuantity} from "../components/growingQuantity";
import {IteratorUtils} from "../../IteratorUtils";

export class Growth implements System {

  private lastUpdate: number = 0;

  /**
   * Milliseconds that should pass before an update to an entity should occur.
   * @type {number}
   */
  private updateInterval: number = 1000;

  process(frameData: FrameData, entries: IterableIterator<Entity>): void {
    let lastupdateSeconds: number = frameData.currentTFrame - this.lastUpdate;
    if(lastupdateSeconds > this.updateInterval) {
      // console.debug("growth...");
      let itr = IteratorUtils.nonNullIterator(
        IteratorUtils.mapIterator(entries, item => item.getComponent(GrowingQuantity)));
      let result: IteratorResult<Entity> = entries.next();
      // console.debug(entries);
      // console.debug("entity");
      // console.debug(result);
      while (!result.done) {
        let entity: Entity = result.value;
        if(entity.hasComponent(GrowingQuantity)) {
          let gq: GrowingQuantity = entity.getComponent(GrowingQuantity) as GrowingQuantity;
          // console.debug("quantity: " + gq.quantity);
          // console.debug("rate: " + gq.ratePerSecond);
          gq.quantity += gq.ratePerSecond;
        }

        // console.debug(gq);
        // gq.quantity += 1;
        // console.debug(gq.quantity);
        result = itr.next();
      }
      this.lastUpdate = frameData.currentTFrame;
    }
  }

  components(): string[] {
    return null;
  }
}
