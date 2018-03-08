import {Injectable} from '@angular/core';
import {StateService} from "./state.service";
import {SystemsService} from "./ecs/systems.service";
import {System} from "./ecs/system";
import {EntityService} from "./ecs/entity.service";
import {Entity} from "./ecs/Entity";
import {GameWorldService} from "./game-world.service";

@Injectable()
export class EngineService {

  frameCount: number = 0;
  currentPendingFrame: number = -1;

  constructor(private systemsService: SystemsService, private entityService: EntityService, private gameWorldService: GameWorldService) {
  }

  public start() {
    this.gameWorldService.initWorld();
    this.gameLoop();
  }

  /**
   *
   * @param {number} tFrame
   */
  private gameLoop(tFrame?: number) {
    this.currentPendingFrame = window.requestAnimationFrame(this.gameLoop.bind(this));
    this.frameCount++;
    this.callSystems();
  }

  private callSystems() {
    this.systemsService.systems.forEach(
      (s: System) => {
        s.process(this.entityService.all())
      });
  }

  public stop() {
    console.debug("stopped");
    window.cancelAnimationFrame(this.currentPendingFrame);
  }

}
