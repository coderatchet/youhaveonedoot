import {inject, TestBed} from '@angular/core/testing';

import {GameWorldService} from './game-world.service';
import {StateService} from "./state.service";
import {EntityService} from "./ecs/entity.service";
import {SystemsService} from "./ecs/systems.service";
import {RenderingService} from "./ecs/rendering.service";
import {DefaultSpys} from "../test/mocks";

describe('GameWorldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameWorldService,
        {provide: StateService, useValue: DefaultSpys.stateService},
        {provide: SystemsService, useValue: DefaultSpys.systemsService},
        {provide: EntityService, useValue: DefaultSpys.entityService},
        {provide: RenderingService, useValue: DefaultSpys.renderingService}
      ]
    });
  });

  it('should be created', inject([GameWorldService], (service: GameWorldService) => {
    expect(service).toBeTruthy();
  }));
});
