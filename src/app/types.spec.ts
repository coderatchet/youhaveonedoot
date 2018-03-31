// import { TestBed, inject } from '@angular/core/testing';

import {SafeNestedMap} from './types'

describe('safeNestedMap', () => {
  let map: SafeNestedMap;
  beforeEach(() => {
    map = new SafeNestedMap();
  });

  it('should set a level one string state', () => {
    map.set('foo', 'bar');
    expect(map.get('foo')).toBe('bar');
  });

  it('should set a level one boolean state', () => {
    map.set('foo', true);
    expect(map.get('foo')).toBe(true);
  });

  it('should set a level one number state', () => {
    map.set('foo', 1.1);
    expect(map.get('foo')).toBe(1.1);
  });

  it('should set a level one array state', () => {
    map.set('foo', [1.1, true, 'bar']);
    expect(map.get('foo')).toBe([1.1, true, 'bar']);
  });
});

describe('safeNestedMap as a Saveable', () => {
  let map: SafeNestedMap;
  beforeEach(() => {
    map = new SafeNestedMap();
  });

  it('should save and load a string', () => {
  });
});

