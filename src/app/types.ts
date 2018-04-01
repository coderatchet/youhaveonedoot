import {ThingType} from "./unit-type";
import {Saveable} from "./saveable";

export type Primitive = string | number | boolean | null;
export type ValidMapValue = Primitive | (Primitive|Primitive[])[] | SafeNestedMap;
const CUTOFF_LENGTH: number = 15;
const SAVE_PRECISION: number = 10;

export class NestedTypeError extends TypeError {
  constructor(public key: string) {
    super(`attempts to access the nested property of a non map value: ${key}`);
  }
}

export class SafeNestedMap implements Saveable<SafeNestedMap> {

  private _instance: Map<string, ValidMapValue>;

  constructor(entries?: [string, Primitive | SafeNestedMap][]) {
    this._instance = new Map<string, ValidMapValue>(entries);
  }

  /**
   * recursively retrieves a map and creates nested maps along the way.
   * @param {string} path
   * @private
   */
  protected getOrCreateMap(path: string): SafeNestedMap {
    const parts = path.split(/\.(.+)/, 2);
    const key = parts[0];
    let map = this.get(key);
    if (parts.length > 1) {
      const rest = parts[1];
      if (typeof map === 'undefined') {
        map = new SafeNestedMap();
        this._set(key, map);
      } else if (!(map instanceof SafeNestedMap)) {
        throw new NestedTypeError(key);
      }
      try {
        map = map.getOrCreateMap(rest);
      } catch (e) {
        if (e instanceof NestedTypeError) {
          throw new NestedTypeError(`${key}.${e.key}`);
        } else throw e;
      }
    } else {
      if (typeof map === 'undefined') {
        map = new SafeNestedMap();
        this._instance.set(key, map);
      } else if (!(map instanceof SafeNestedMap)) {
        throw new Error(`Expected a ${SafeNestedMap.name}, got ${map.constructor.name}`);
      }
    }
    return map;
  }

  get(key: string): ValidMapValue {
    if (SafeNestedMap._validPath(key)) {
      return this._get(key);
    } else {
      throw new Error(`invalid key: ${key}, must be alphanumeric identifiers starting with a letter and separated by '.'s`);
    }
  }

  private _get(key: string): ValidMapValue {
    const indexOfLastDot = key.lastIndexOf('.');
    if (indexOfLastDot > -1) {
      const mapKey = key.slice(0, indexOfLastDot);
      const valueKey = key.slice(indexOfLastDot + 1);
      return this.getOrCreateMap(mapKey).get(valueKey);
    } else {
      return this._instance.get(key);
    }
  }

  set(key: string, value: ValidMapValue): this {
    if (SafeNestedMap._validPath(key)) {
      return this._set(key, value);
    } else {
      throw new Error(`invalid key: ${key}, must be alphanumeric identifiers starting with a letter and separated by '.'s`);
    }
  }

  /**
   * We know that the path is valid so can make assumptions based on it. internal set method.
   * @param {string} key
   * @param {Primitive | SafeNestedMap} value
   * @private
   */
  private _set(key: string, value: ValidMapValue): this {
    const indexOfLastDot = key.lastIndexOf('.');
    if (indexOfLastDot < 0) {
      this._instance.set(key, value);
      return this;
    } else {
      const mapKey = key.slice(0, indexOfLastDot);
      const valueKey = key.slice(indexOfLastDot + 1);
      this.getOrCreateMap(mapKey)._set(valueKey, value);
      return this;
    }
  }

  private static _validPath(key: string): boolean {
    return !!key.match(/^(?:[A-Za-z_][A-Za-z0-9_]*\.)*[A-Za-z_][A-Za-z0-9_]*$/g);
  }

  public static load(s: string): SafeNestedMap {
    return null;
  }

  save(): string {
    let s = "{";
    let keysItr = this._instance.keys();
    let keyResult = keysItr.next();
    while (!keyResult.done) {
      const key = keyResult.value;
      const value = SafeNestedMap.serializeValue(this._get(key));
      s += `${key}=${value}`;
      keyResult = keysItr.next();
      if(!keyResult.done) s += ',';
    }
    s += "}";
    return s;
  }

  private static serializeNumber(n: number) {
    if((n + '').length > CUTOFF_LENGTH) {
      return n.toExponential(SAVE_PRECISION);
    } else {
      return n.toString();
    }
  }

  private static serializeValue(v: ValidMapValue): string {
    if (v === null) return 'n';
    if (v instanceof SafeNestedMap) return v.save();
    if (Array.isArray(v)) {
      return `[${v.map(SafeNestedMap.serializeValue).join(',')}]`;
    }
    switch (typeof v) {
      case 'number': {
        return `d:${SafeNestedMap.serializeNumber(v as number)}`;
      }
      case 'string': {
        return `s:${v.toString().replace(/([:=[\]{}\\])/g, '\\$1')}`;
      }
      case 'boolean': {
        return v ? 't' : 'f';
      }
    }
  }
}

export class Cost {
  constructor(public thing: ThingType, public price: number) {
  }
}
