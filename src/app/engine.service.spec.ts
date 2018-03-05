import {inject, TestBed} from '@angular/core/testing';

import {EngineService} from './engine.service';
import {SystemsService} from "./ecs/systems.service";
import {GameWorldService} from "./game-world.service";
import {EntityService} from "./ecs/entity.service";

describe('EngineService', () => {
  beforeEach(() => {
    const systemsServiceSpy = jasmine.createSpyObj('SystemsService', ['systems']);
    const entityService = jasmine.createSpyObj('EntityService', ['all']);
    const gameWorldServiceSpy = jasmine.createSpyObj('GameWorldService', ['initWorld']);
    systemsServiceSpy.systems.and.returnValue([]);

    TestBed.configureTestingModule({
      providers: [
        EngineService,
        {provide: SystemsService, useValue: systemsServiceSpy},
        {provide: EntityService, useValue: entityService},
        {provide: GameWorldService, useValue: gameWorldServiceSpy}
      ]
    });
  });

  it('should be created', inject([EngineService], (service: EngineService) => {
    expect(service).toBeTruthy();
  }));
});
