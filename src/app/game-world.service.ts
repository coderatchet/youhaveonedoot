import {Injectable} from '@angular/core';
import {StateService} from "./state.service";
import {EntityService} from "./ecs/entity.service";
import {Entity} from "./ecs/Entity";
import {GrowingQuantity} from "./ecs/components/growingQuantity";
import {SystemsService} from "./ecs/systems.service";
import {Growth} from "./ecs/systems/growth";

@Injectable()
export class GameWorldService {

  private _doots = new Entity().addComponent(new GrowingQuantity(0));

  constructor(private stateService: StateService,
              private entityService: EntityService,
              private systemService: SystemsService) {
  }

  /**
   * main entry point for game initialization. populate the entities
   */
  public initWorld() {
  }

}
