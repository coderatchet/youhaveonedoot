import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {StateService} from "./state.service";
import {EngineService} from "./engine.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StateService, EngineService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
