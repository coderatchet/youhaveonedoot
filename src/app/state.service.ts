import {Injectable} from '@angular/core';
import {Primitive, SafeNestedMap, ValidMapValue} from "./types";

@Injectable()
export class StateService {

  private states: SafeNestedMap = new SafeNestedMap();

  constructor() {
  }

  getState(path: string): ValidMapValue {
    return this.states.get(path);
  }

  setState(path: string, value: Primitive | Primitive[]) {
    this.states.set(path, value);
  }
}
