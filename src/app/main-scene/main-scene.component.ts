import {Component, OnInit} from '@angular/core';
import {StateService} from "../state.service";

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

  constructor() {
    console.log("constructing Main Scene component.");
  }

  ngOnInit() {
    console.log("init Main Scene component");
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
