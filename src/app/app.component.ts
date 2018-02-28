import { Component } from '@angular/core';
import { Servicio1Service } from './servicio1.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public var1= "yimmy y su primer proyecto en angular5";
  public var2= "5";
  public hoy=new Date();
  public nombre="yimmy";
  public numero =0;
  public varmostrar: boolean = false
  array = ['yimmy','luis','mario','christhian','romauldo'];

  constructor(public auth:Servicio1Service){}


  public respuesta:string;
 respuestaarray:  any =[];
calcularfecha() {
  var dia;
  var mes;
  var anio;

  dia = this.hoy.getDate();
  mes = this.hoy.getMonth();
  anio = this.hoy.getFullYear();
  console.log(this.hoy);

}
  obtenerservicio(){
    this.numero=this.auth.getNumero();
    return this.auth.getobjeto().subscribe(
        result => {
           console.log(result);
          this.respuesta= result._body;
          this.respuestaarray= JSON.parse(result._body);
        },
        error => {
          console.log(<any>error);
        }
    );
  }
  mostrarobjeto(){

    this.varmostrar=!this.varmostrar

  }
}
