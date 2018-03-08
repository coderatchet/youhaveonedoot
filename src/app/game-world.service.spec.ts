import { TestBed, inject } from '@angular/core/testing';

import { GameWorldService } from './game-world.service';

describe('GameWorldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameWorldService]
    });
  });

  it('should be created', inject([GameWorldService], (service: GameWorldService) => {
    expect(service).toBeTruthy();
  }));
});
