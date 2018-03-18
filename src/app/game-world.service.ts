import {Injectable} from '@angular/core';
import {StateService} from "./state.service";
import {EntityService} from "./ecs/entity.service";
import {Entity} from "./ecs/Entity";
import {GrowingQuantity} from "./ecs/components/growingQuantity";
import {SystemsService} from "./ecs/systems.service";

@Injectable()
export class GameWorldService {

  private _doots = new Entity('doots').addComponent(new GrowingQuantity(0));

  constructor(private stateService: StateService,
              private entityService: EntityService,
              private systemService: SystemsService) {
    console.debug("contructing GameWorldService");
  }

  /**
   * main entry point for game initialization. populate the entities
   */
  public initWorld() {
    console.debug("init GameWorldService");
    this.entityService.add(this._doots);
  }

}
