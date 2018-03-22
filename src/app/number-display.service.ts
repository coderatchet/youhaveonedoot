import { Injectable } from '@angular/core';

@Injectable()
export class NumberDisplayService {

  constructor() { }

  public displayNumber(value: number): string {
    return '' + value;
  }

}
