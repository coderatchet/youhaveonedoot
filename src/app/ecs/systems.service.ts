import {Injectable} from '@angular/core';
import {System} from "./system";

@Injectable()
export class SystemsService {

  public systems: System[] = [];

  constructor() {
  }

}
