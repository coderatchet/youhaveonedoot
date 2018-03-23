import {Component, OnInit} from '@angular/core';
import {StateService} from "../state.service";
import {SystemsService} from "../ecs/systems.service";
import {Render} from "../ecs/systems/render";
import {GameWorldService} from "../game-world.service";
import {RenderingService} from "../ecs/rendering.service";

@Component({
  selector: 'app-main-scene',
  templateUrl: './main-scene.component.html',
  styleUrls: ['./main-scene.component.scss']
})
export class MainSceneComponent implements OnInit {

  public static canvasId: string = "mainScene";
  public static canvasWidth: number = 800;
  public static canvasHeight: number = 600;
  public static sizeUnit: string = "px";

  constructor(private systemsService: SystemsService, private gameWorldService: GameWorldService, private renderService: RenderingService) {
    console.log("constructing Main Scene component.");
  }

  ngOnInit() {
    console.log("init Main Scene component");
    let that = this;
    this.gameWorldService.onWorldInit(() => {
      that.systemsService.systems.push(new Render());
    })
  }

  get canvasId(): string {
    return MainSceneComponent.canvasId;
  }

  get canvasWidth(): number {
    return MainSceneComponent.canvasWidth;
  }

  get canvasHeight(): number {
    return MainSceneComponent.canvasHeight;
  }

  get sizeUnit(): string {
    return MainSceneComponent.sizeUnit;
  }

}
