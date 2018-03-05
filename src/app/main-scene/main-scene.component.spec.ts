import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainSceneComponent} from './main-scene.component';
import {DefaultSpys} from "../../test/mocks";
import {GameWorldService} from "../game-world.service";
import {SystemsService} from "../ecs/systems.service";

describe('MainSceneComponent', () => {
  let component: MainSceneComponent;
  let fixture: ComponentFixture<MainSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: GameWorldService, useValue: DefaultSpys.gameWorldService},
        {provide: SystemsService, useValue: DefaultSpys.systemsService},
      ],
      declarations: [MainSceneComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
