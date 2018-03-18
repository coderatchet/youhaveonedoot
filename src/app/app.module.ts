import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {StateService} from "./state.service";
import {EngineService} from "./engine.service";
import {MainSceneComponent} from './main-scene/main-scene.component';
import {SystemsService} from "./ecs/systems.service";
import {GameWorldService} from "./game-world.service";
import {EntityService} from "./ecs/entity.service";

@NgModule({
  declarations: [
    MainSceneComponent,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    StateService,
    EngineService,
    SystemsService,
    GameWorldService,
    EntityService
  ],
  bootstrap: [
    MainSceneComponent,
    AppComponent
  ]
})
export class AppModule {
}
