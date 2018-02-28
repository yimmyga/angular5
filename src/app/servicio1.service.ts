import { Injectable } from '@angular/core';
import {AppConfigService}from './app-config.service'
import { Http} from '@angular/http';
@Injectable()
export class Servicio1Service {
 public var: number = 5;
  constructor(public config: AppConfigService, public http:Http ){ }
  getNumero():number {
  return this.var
  }

  getobjeto():any{
   var respuesta = this.http.get<any>(this.config.url)+'@GetMapping("listarpersona")';
   console.log(respuesta);
   this.getobjeto();

  }


}