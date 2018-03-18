import {Injectable} from '@angular/core';
import {Entity} from "./Entity";

@Injectable()
export class EntityService {

  private entities: Map<number, Entity> = new Map();

  public all(): IterableIterator<Entity> {
    return this.entities.values();
  }

  public get(id: number): Entity {
    return this.entities[id];
  }

  public add(e: Entity) {
    this.entities[e.id] = e;
  }

  public remove(e: number | Entity) {
    if (typeof e === 'number') {
      this.entities.delete(e);
    } else {
      this.entities.delete(e.id);
    }
  }

  constructor() {
    console.debug("construct entity service");
  }

}
