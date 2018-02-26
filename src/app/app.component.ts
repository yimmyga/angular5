import { Component } from '@angular/core';
import { Servicio1Service } from './servicio1.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public var1 = "yimmy y su primer proyecto en angular5";
  public var2 = "5";
  public hoy = new Date();
  public nombre = "yimmy";
  public numero = 0
  public n1 = 12;
  public n2 = 0;
  public mostrar:boolean = false;
  public array = ['Mario','Root','System','Luz','Zul','Casa','Javier','Manuel','Cristian'];
  constructor(public auth:Servicio1Service) {
  }

  calcularfecha() {
    var dia;
    var mes;
    var anio;
    dia = this.hoy.getDate();
    mes = this.hoy.getMonth();
    anio = this.hoy.getFullYear();
    console.log(this.hoy);
  }

  obtenerservicio() {
    this.numero = this.auth.getNumero()
  }

  mostrarObjeto() {
    this.mostrar = !this.mostrar;
  }
}