import {Entity} from "./Entity";

export interface System {
  process(entries: Entity[]): void
  components(): string[]
}
