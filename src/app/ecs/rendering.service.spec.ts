import {inject, TestBed} from '@angular/core/testing';

import {RenderingService} from './rendering.service';
import {NumberDisplayService} from "../number-display.service";

describe('RenderingService', () => {
  beforeEach(() => {
    const numberDisplayServiceSpy = jasmine.createSpyObj('NumberDisplayService', ['displayNumber']);

    TestBed.configureTestingModule({
      providers: [RenderingService,
        {provide: NumberDisplayService, useValue: numberDisplayServiceSpy}
      ]
    });
  });

  it('should be created', inject([RenderingService], (service: RenderingService) => {
    expect(service).toBeTruthy();
  }));
});
