import { TestBed, inject } from '@angular/core/testing';

import { CompressionService } from './compression.service';
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

  // it('should compress a json object correctly', () => {
  //   const previous: SafeNestedMap({}) =
  // });
});
