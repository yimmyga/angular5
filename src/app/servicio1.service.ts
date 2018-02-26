import { Injectable } from '@angular/core';

@Injectable()
export class Servicio1Service {
 public var: number = 5;
 public bander = true;

  constructor() { }

  getNumero():number {
  return this.var;
  }

  aparecer(){
    if (this.bander == true){
      return this.bander = true;
    }else{
     return this.bander = false;
    }
  }




}