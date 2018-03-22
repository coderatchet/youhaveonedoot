import {Injectable} from '@angular/core';
import {StateService} from "./state.service";
import {EntityService} from "./ecs/entity.service";
import {Entity} from "./ecs/Entity";
import {GrowingQuantity} from "./ecs/components/growingQuantity";
import {SystemsService} from "./ecs/systems.service";
import {Growth} from "./ecs/systems/growth";
import {Render} from "./ecs/systems/render";
import {Renderable2D} from "./ecs/components/Renderable2D";
import {RenderingService} from "./ecs/rendering.service";

@Injectable()
export class GameWorldService {

  private _doots = new Entity('doots')/*.addComponent(new GrowingQuantity(0))*/;

  constructor(private stateService: StateService,
              private entityService: EntityService,
              private systemService: SystemsService,
              private renderingService: RenderingService) {
    console.debug("contructing GameWorldService");
  }

  /**
   * main entry point for game initialization. populate the entities
   */
  public initWorld() {
    this.createSystems();
    let comp = new GrowingQuantity(0);
    this._doots.addComponent(comp);
    this._doots.addComponent(new Renderable2D(this.renderingService.getNumberRenderer()));
    console.debug("init GameWorldService");
    this.entityService.add(this._doots);
  }

  private createSystems() {
    this.systemService.systems = [
      new Growth(),
      new Render()
    ];
  }

}
