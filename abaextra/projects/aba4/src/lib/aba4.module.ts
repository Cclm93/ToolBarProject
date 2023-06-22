import { NgModule } from '@angular/core';
import { Aba4Component } from './aba4.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    Aba4Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
  ],
  exports: [
    Aba4Component
  ]
  })
export class Aba4Module {
  /*@Input() arraymensagens: Array<String> = [];

  @Output() public emitlower = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
     
  if(this.arraymensagens.length > 0){
            
      for(let i =0 ; i <=this.arraymensagens.length ; i++){

        this.arraymensagens[i] = this.arraymensagens[i].toLowerCase();
      }

      this.emitlower.emit(this.arraymensagens);
      }
  }*/
 }
