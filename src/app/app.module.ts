import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { AppRouterModule } from './app-routing.module';
import { Componente4Component } from './componente4/componente4.component';
import { Servicio1Service } from './servicio1.service';
import { Componente8Component } from './componente8/componente8.component';



@NgModule({
  declarations: [
    AppComponent,
    Componente2Component,
    Componente3Component,
    Componente4Component,
    Componente8Component
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule, AppRouterModule

  ],
  providers: [Servicio1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
