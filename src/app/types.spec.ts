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
  })
});

describe('safeNestedMap as a Saveable', () => {
  let map: SafeNestedMap;
  beforeEach(() => {
    map = new SafeNestedMap();
  });

  it('should return empty curlies when empty map is saved', () => {
    expect(map.save()).toBe('{}');
  });

  it('should return {foo=s:bar} for string property', () => {
    map.set('foo', 'bar');
    expect(map.save()).toBe('{foo=s:bar}');
  });

  it('should return {foo=d:1.1} for number property', () => {
    map.set('foo', 1.1);
    expect(map.save()).toBe('{foo=d:1.1}');
  });

  it('should return {foo=t} for boolean true', () => {
    map.set('foo', true);
    expect(map.save()).toBe('{foo=t}');
  });

  it('should return {foo=f} for boolean false', () => {
    map.set('foo', false);
    expect(map.save()).toBe('{foo=f}');
  });

  it('should return {foo=n} for a null', () => {
    map.set('foo', null);
    expect(map.save()).toBe('{foo=n}');
  });

  it('should return {foo={}} for a map', () => {
    map.set('foo', new SafeNestedMap());
    expect(map.save()).toBe('{foo={}}');
  });

  it('should return {foo=[s:bar,d:1.1,t,f,n]} for array', () => {
    map.set('foo', ['bar', 1.1, true, false, null]);
    expect(map.save()).toBe('{foo=[s:bar,d:1.1,t,f,n]}');
  });

  it('should return {foo=[[d:1]]} for nested array', () => {
    map.set('foo', [[1]]);
    expect(map.save()).toBe('{foo=[[d:1]]}');
  });

  it('should return {foo=s:bar,baz=d:1.1} for multiple properties', () => {
    map.set('foo', 'bar');
    map.set('baz', 1.1);
    expect(map.save()).toBe('{foo=s:bar,baz=d:1.1}');
  });

  it('should escape special characters in strings', () => {
    map.set('foo', ':=[]{}\\');
    expect(map.save()).toBe('{foo=s:\\:\\=\\[\\]\\{\\}\\\\}');
  });

  it('should make scientific notification (with precision of 10) out of numbers with more than 15 characters.', () => {
    map.set('foo', 1234567891234567);
    map.set('bar', 1.12345678912345);
    expect(map.save()).toBe('{foo=d:1.2345678912e+15,bar=d:1.1234567891e+0}');
  });
});

describe('SafeNestedMap loading from a save', () => {
  it('should load an empty map', () => {
    expect(SafeNestedMap.load('{}')).toEqual(new SafeNestedMap());
  });

  it('should load a string property', () => {
    expect(SafeNestedMap.load('{foo=s:bar}').get('foo')).toBe('bar');
  });
});

//
// \{(?:([A-Za-z_][A-Za-z0-9_]*)=[tfn]|d:(?:\d+(?:\.\d+(?:e\+\d{1,3})?)?),)*([A-Za-z_][A-Za-z0-9_]*)=({.*}|[tfn]|d:[0-9])\} #
//
// ((?:[tfn]|d:(?:\d+(?:\.\d+(?:e\+\d{1,3})?)?)|(.*|\\?[:\=\[\]{}\\])))(?=[^\\]?,|[^\\]?})    # value
//
// (?:(.*|\\?[:\=\[\]{}\\])(?=[^\\]?,|[^\\]?})) # for strings with
//
//   (?:\d+(?:\.\d+(?:e\+\d{1,3})?)?) # number
//
// ([A-Za-z_][A-Za-z0-9_]*)   # key
//
// ([A-Za-z_][A-Za-z0-9_]*)=((?:[tfn]|d:(?:\d+(?:\.\d+(?:e\+\d{1,3})?)?)|(.*|\\?[:\=\[\]{}\\])))(?=[^\\]?,|[^\\]?})
//
// \{(?:([A-Za-z_][A-Za-z0-9_]*)=((?:[tfn]|d:(?:\d+(?:\.\d+(?:e\+\d{1,3})?)?)|(.*|\\?[:\=\[\]{}\\])))(?=[^\\]?,|[^\\]?}),)*([A  -Za-z_][A-Za-z0-9_]*)=((?:[tfn]|d:(?:\d+(?:\.\d+(?:e\+\d{1,3})?)?)|(.*|\\?[:\=\[\]{}\\])))(?=[^\\]?,|[^\\]?})\}
