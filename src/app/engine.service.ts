import {Injectable} from '@angular/core';
import {StateService} from "./state.service";

@Injectable()
export class EngineService {

  frameCount: number = 0;
  currentPendingFrame: number = -1;

  constructor(private stateService: StateService) {
  }

  public start() {
    this.gameLoop();
  }

  /**
   *
   * @param {number} tFrame
   */
  private gameLoop(tFrame?: number) {
    this.currentPendingFrame = window.requestAnimationFrame(this.gameLoop.bind(this));
    if (++this.frameCount % 60 === 0) {
      console.log(`frame count: ${this.frameCount}`);
    }
  }

  public stop() {
    console.debug("stopped");
    window.cancelAnimationFrame(this.currentPendingFrame);
  }

}
