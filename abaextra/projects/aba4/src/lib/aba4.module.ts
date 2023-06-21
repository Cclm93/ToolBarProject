import { NgModule } from '@angular/core';
import { Aba4Component } from './aba4.component';
import { Input,Output, OnInit, EventEmitter } from '@angular/core';


@NgModule({
  declarations: [
    Aba4Component
  ],
  imports: [
  ],
  exports: [
    Aba4Component
  ]
})
export class Aba4Module implements OnInit {
  @Input() arraymensagens: Array<String> = [];

  @Output() public emitupper = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
          
    if(this.arraymensagens.length > 0){
            
      for(let i =0 ; i <=this.arraymensagens.length ; i++){

        this.arraymensagens[i] = this.arraymensagens[i].toLowerCase();
      }

      this.emitupper.emit(this.arraymensagens);
      }
  }
 }
