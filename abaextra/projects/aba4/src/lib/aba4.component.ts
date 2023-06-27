import { Component } from '@angular/core';
import { Input,Output, OnInit, EventEmitter } from '@angular/core';
//import * as NewType from './NewType';

@Component({
  selector: 'lib-aba4',
  template: `
    <p>
    <h1>To Lowercase</h1>

    <ul>
        <li *ngFor="let mensagem of this.arraymensagens ">
            <p> {{mensagem}}</p>                     
        </li>
    </ul>

    <p  > ta vazio</p>

    <p>Funcionalidade vinda de uma library importada de outro projeto</p>
  
  
  
  
  `,
  styles: [
  ]
})
export class Aba4Component implements OnInit {


  @Input() arraymensagens: Array<String>= [];

  @Output() public emitlower = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
          

    if(this.arraymensagens.length > 0){
            
      for(let i =0 ; i <=this.arraymensagens.length ; i++){

        this.arraymensagens[i] = this.arraymensagens[i].toLowerCase();
      }

      this.emitlower.emit(this.arraymensagens);
      }

    }

}
