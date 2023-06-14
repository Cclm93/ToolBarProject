import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //importação do FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { Aba2Component } from './aba2/aba2.component';
import { Aba1Component } from './aba1/aba1.component';
import { Aba3Component } from './fornecedordeabas/aba3/aba3.component';



@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    Aba2Component,
    Aba1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
     Aba3Component,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
