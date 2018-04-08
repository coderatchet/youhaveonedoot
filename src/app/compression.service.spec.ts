import {inject, TestBed} from '@angular/core/testing';

import {CompressionService} from './compression.service';
import {SafeNestedMap} from "./types";

describe('CompressionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompressionService]
    });
  });

  it('should be created', inject([CompressionService], (service: CompressionService) => {
    expect(service).toBeTruthy();
  }));

  it('should compress a json object correctly', inject([CompressionService], (service: CompressionService) => {
    const previous: SafeNestedMap = new SafeNestedMap({
      foo: 1,
      baz: 'bar',
      bee: true,
      bop: false,
      bait: null,
      bad: [],
      bus: {}
    });
    const save: string = previous.save();
    const processed: string = service.decompress(service.compress(save));
    expect(SafeNestedMap.load(processed)).toEqual(previous);
  }));
});
