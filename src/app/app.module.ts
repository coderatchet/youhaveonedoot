import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {StateService} from "./state.service";
import {EngineService} from "./engine.service";
import {MainSceneComponent} from './main-scene/main-scene.component';
import {SystemsService} from "./ecs/systems.service";
import {GameWorldService} from "./game-world.service";
import {EntityService} from "./ecs/entity.service";
import {NumberDisplayService} from "./number-display.service";
import {RenderingService} from "./ecs/rendering.service";
import {ShopComponent} from './shop/shop.component';
import {ShopitemComponent} from './shop/shopitem/shopitem.component';
import {ShopService} from "./shop.service";

@NgModule({
  declarations: [
    MainSceneComponent,
    AppComponent,
    ShopComponent,
    ShopitemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    StateService,
    EngineService,
    SystemsService,
    GameWorldService,
    EntityService,
    RenderingService,
    NumberDisplayService,
    ShopService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
