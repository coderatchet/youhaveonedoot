import { Injectable } from '@angular/core';

import compressjs from "compressjs";

@Injectable()
export class CompressionService {

  private algorithm = compressjs.Lzp3;

  constructor() { }

  compress(str: string) {

  }

  decompress(str: string) {

  }
}
