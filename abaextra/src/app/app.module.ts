import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbaxtraComponent } from './abaxtra/abaxtra.component';




@NgModule({
  declarations: [
    AppComponent,
    AbaxtraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:      [AppComponent, AbaxtraComponent ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
