import {Entity} from "./Entity";
import {FrameData} from "../frame-data";

export interface System {
  process(frameData: FrameData, entries: Iterator<Entity>): void

  components(): string[]
}
