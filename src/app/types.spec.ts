// import { TestBed, inject } from '@angular/core/testing';

import {SafeNestedMap} from './types'

describe('safeNestedMap', () => {
  it('should behave', () => {
    let map = new SafeNestedMap();
    map.set('foo', 'bar');
    console.log(`foo: ${map.get('foo')}`);
    console.log(`baz.bar: ${map.get('baz.bar')}`);
    console.log(`baz: ${map.get('baz').constructor.name}`);
  });

  it('should do things and stuff', () => {
    let map = new SafeNestedMap();
    map.set('bar.bin.bas.boo', 123);
    console.log(`bar.bin.bas.boo: ${map.get('bar.bin.bas.boo')}`);
  });
});

