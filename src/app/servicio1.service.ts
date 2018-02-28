import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { Http} from '@angular/http';

@Injectable()
export class Servicio1Service {
 public var: number = 5;
  constructor(
      public config:AppConfigService,
      public http:Http
  ) {

  }

  getNumero():number {
   return this.var
  }
 getobjeto():any {
  return this.http.get(this.config.url+'index/Personas');
 }
}