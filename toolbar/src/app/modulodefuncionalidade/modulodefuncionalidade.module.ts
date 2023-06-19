import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulodefuncionalidadeComponent } from './modulodefuncionalidade.component';
import { Aba3Component } from './aba3/aba3.component';



@NgModule({
  declarations: [
    ModulodefuncionalidadeComponent,
    Aba3Component 
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ModulodefuncionalidadeComponent,
    Aba3Component
  ],
})
export class ModulodefuncionalidadeModule { }
