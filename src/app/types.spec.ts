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

  it('should set a level one boolean true state', () => {
    map.set('foo', true);
    expect(map.get('foo')).toBe(true);
  });

  it('should set a level one boolean false state', () => {
    map.set('foo', false);
    expect(map.get('foo')).toBe(false);
  });

  it('should set a level one number state', () => {
    map.set('foo', 1.1);
    expect(map.get('foo')).toBe(1.1);
  });

  it('should set a level one null state', () => {
    map.set('foo', null);
    expect(map.get('foo')).toBe(null);
  });

  it('should set a level one array state', () => {
    map.set('foo', [1.1, true, 'bar']);
    expect(map.get('foo')).toEqual([1.1, true, 'bar']);
  });

  it('should create a map if not exists', () => {
    map.set('foo.bar', 'v');
    let foo = map.get('foo');
    expect(foo instanceof SafeNestedMap).toBeTruthy();
    expect((foo as SafeNestedMap).get('bar')).toBe('v');
  });

  it('should retrieve level 2 properties', () => {
    map.set('foo.bar', 1.1);
    expect(map.get('foo.bar')).toBe(1.1);
  });

  it('should retrieve level 3 properties', () => {
    map.set('foo.bar.baz', 1.1);
    expect(map.get('foo.bar.baz')).toBe(1.1);
  });

  it('should construct with initial state correctly', () => {
    const first = new SafeNestedMap({});
    expect(first).toEqual(new SafeNestedMap());
  });

  it('should construct with initial state with nested object', () => {
    const first = new SafeNestedMap({foo: {}});
    expect(first.get('foo')).toEqual(new SafeNestedMap());
  });

  it('should construct with initial state of another SafeNestedMap', () => {
    const first = new SafeNestedMap(new SafeNestedMap());
    expect(first).toEqual(new SafeNestedMap());
  });

  it('should construct with nested SafeNestedMap', () => {
    const child = new SafeNestedMap({foo: 1});
    const parent = new SafeNestedMap({baz: child});
    expect(parent.get('baz')).toBe(child);
  })

  it('should initialize with values', () => {
    expect(new SafeNestedMap({foo: 1}).get('foo')).toBe(1);
    expect(new SafeNestedMap({foo: 'bar'}).get('foo')).toBe('bar');
    expect(new SafeNestedMap({foo: true}).get('foo')).toBe(true);
    expect(new SafeNestedMap({foo: false}).get('foo')).toBe(false);
    expect(new SafeNestedMap({foo: null}).get('foo')).toBe(null);
    expect(new SafeNestedMap({foo: [1, 'bar', true, false, null]}).get('foo')).toEqual([1, 'bar', true, false, null]);
  });
});

describe('safeNestedMap as a Saveable', () => {
  let map: SafeNestedMap;
  beforeEach(() => {
    map = new SafeNestedMap();
  });

  it('should return empty curlies when empty map is saved', () => {
    expect(map.save()).toBe('{}');
  });

  it('should return {"foo":"bar"} for string property', () => {
    map.set('foo', 'bar');
    expect(map.save()).toBe('{"foo":"bar"}');
  });

  it('should return {"foo":1.1} for number property', () => {
    map.set('foo', 1.1);
    expect(map.save()).toBe('{"foo":1.1}');
  });

  it('should return {"foo":true} for boolean true', () => {
    map.set('foo', true);
    expect(map.save()).toBe('{"foo":true}');
  });

  it('should return {"foo":false} for boolean false', () => {
    map.set('foo', false);
    expect(map.save()).toBe('{"foo":false}');
  });

  it('should return {"foo":null} for a null', () => {
    map.set('foo', null);
    expect(map.save()).toBe('{"foo":null}');
  });

  it('should return {"foo":{}} for a map', () => {
    map.set('foo', new SafeNestedMap());
    expect(map.save()).toBe('{"foo":{}}');
  });

  it('should return {"foo":["bar",1.1,true,false,null]} for array', () => {
    map.set('foo', ['bar', 1.1, true, false, null]);
    expect(map.save()).toBe('{"foo":["bar",1.1,true,false,null]}');
  });

  it('should return {"foo":[[1]]} for nested array', () => {
    map.set('foo', [[1]]);
    expect(map.save()).toBe('{"foo":[[1]]}');
  });

  it('should return {"foo":"bar","baz":1.1} for multiple properties', () => {
    map.set('foo', 'bar');
    map.set('baz', 1.1);
    expect(map.save()).toBe('{"foo":"bar","baz":1.1}');
  });

  it('should make scientific notification (with precision of 15) out of numbers with more than 20 characters.', () => {
    map.set('fiz', 123456789123456789012);
    map.set('foo', 1234567891234567890123);
    map.set('bar', 1.1234567891234567890112341234234);
    map.set('bee', 0.000000000032154);
    map.set('boo', 0.00000000003215413513);
    expect(map.save()).toBe('{' +
      '"fiz":123456789123456800000,' +
      '"foo":1.234567891234568e+21,' +
      '"bar":1.1234567891234568,' +
      '"bee":3.2154e-11,' +
      '"boo":3.215413513e-11}');
  });
});

describe('SafeNestedMap loading from a save', () => {
  it('should load an empty map', () => {
    expect(SafeNestedMap.load('{}')).toEqual(new SafeNestedMap());
  });

  it('should load a string property', () => {
    expect(SafeNestedMap.load('{"foo":"bar"}').get('foo')).toBe('bar');
  });

  it('should load a number property', () => {
    expect(SafeNestedMap.load('{"foo":1.234567891234568e+21}').get('foo')).toBeCloseTo(1.234567891234568e+21);
  });

  it('should load a boolean property', () => {
    let actual = SafeNestedMap.load('{"foo":true,"bar":false}');
    expect(actual.get('foo')).toBe(true);
    expect(actual.get('bar')).toBe(false);
  });

  it('should load a null property', () => {
    expect(SafeNestedMap.load('{"foo":null}').get('foo')).toBe(null);
  });

  it('should load an array property', () => {
    expect(SafeNestedMap.load('{"foo":["bar",1.1,true,false,null]}').get("foo")).toEqual(["bar", 1.1, true, false, null]);
  });

  it('should load an object property', () => {
    expect(SafeNestedMap.load('{"foo":{}}').get("foo")).toEqual(new SafeNestedMap());
  });

  it('should load an object property with properties', () => {
    const expected = new SafeNestedMap({bar: "baz"});
    expect(SafeNestedMap.load('{"foo":{"bar":"baz"}}').get("foo")).toEqual(expected);
  });
});
