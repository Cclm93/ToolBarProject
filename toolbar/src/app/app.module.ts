import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //importação do FormsModule



//Componentes
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { Aba2Component } from './aba2/aba2.component';
import { Aba1Component } from './aba1/aba1.component';

//Módulos
import { AppRoutingModule } from './app-routing.module';
import { ModulodefuncionalidadeModule } from './modulodefuncionalidade/modulodefuncionalidade.module';

//Libraries
import {  Aba4Module } from 'aba4';
import {  Aba7Module } from 'aba7';

@NgModule({
  declarations: [
    AppComponent, 
    BarComponent,
    Aba2Component,
    Aba1Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
     ModulodefuncionalidadeModule,
     Aba4Module,
     Aba7Module,
     
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
