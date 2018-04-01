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

