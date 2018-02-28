// import { TestBed, inject } from '@angular/core/testing';

import {SafeNestedMap} from './types'

describe('safeNestedMap', () => {
  it('should behave', () => {
    let map = new SafeNestedMap();
    map.set('foo', 'bar');
    console.log(`foo: ${map.get('foo')}`);
  });
});

