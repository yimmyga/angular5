import { Injectable } from '@angular/core';

@Injectable()
export class Servicio1Service {
 public var: number = 5
  constructor() { }

  getNumero():number {
  return this.var
  }
}