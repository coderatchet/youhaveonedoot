import {Injectable} from '@angular/core';
import {Primitive, SafeNestedMap} from "./types";

@Injectable()
export class StateService {

  private states: SafeNestedMap = new SafeNestedMap();

  constructor() {
  }

  getState(path: string): any {
    return this.states.get(path);
  }

  setState(path: string, value: Primitive) {
    this.states.set(path, value);
  }
}
