import { TestBed, inject } from '@angular/core/testing';

import { NumberDisplayService } from './number-display.service';

describe('NumberDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumberDisplayService]
    });
  });

  it('should be created', inject([NumberDisplayService], (service: NumberDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
