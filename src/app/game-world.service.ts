import {Injectable} from '@angular/core';
import {StateService} from "./state.service";
import {EntityService} from "./ecs/entity.service";
import {Entity} from "./ecs/Entity";
import {GrowingQuantity} from "./ecs/components/growingQuantity";
import {SystemsService} from "./ecs/systems.service";
import {Growth} from "./ecs/systems/growth";
import {Renderable2D} from "./ecs/components/Renderable2D";
import {RenderingService} from "./ecs/rendering.service";
import {LiteEvent} from "./lite-event";
import {Position} from "./ecs/components/position";

@Injectable()
export class GameWorldService {

  private _doots = new Entity('doots')/*.addComponent(new GrowingQuantity(0))*/;
  private _worldInitialized: boolean = false;
  private _onInitWorld: LiteEvent<void> = new LiteEvent<void>();

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
    this.renderingService.init();
    let numberRenderer = this.renderingService.getNumberRenderer();
    this._doots.addComponent(new Position(50, 50));
    this._doots.addComponent(new Renderable2D(numberRenderer));
    console.debug("init GameWorldService");
    this.entityService.add(this._doots);
    this._worldInitialized = true;
    this._onInitWorld.trigger();
  }

  public onInitWorld(callBack: () => void) {
    if (this._worldInitialized) {
      callBack();
    } else {
      this._onInitWorld.on(callBack);
    }
  }

  private createSystems() {
    this.systemService.systems = [
      new Growth()
    ];
  }

}
