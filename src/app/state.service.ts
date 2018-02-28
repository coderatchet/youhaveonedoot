import {Injectable} from '@angular/core';
import {Primitive, SafeNestedMap} from "./types";

@Injectable()
export class StateService {

  states: SafeNestedMap = new SafeNestedMap();

  constructor() {
  }

  getState(path: string): any {
    // return this.states.resolvePath(path, true);
  }

  setState(path: string, value: Primitive) {
    // return this.states.set(path, value);
  }
}
