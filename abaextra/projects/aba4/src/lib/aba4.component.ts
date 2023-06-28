import { Component } from '@angular/core';
import { Input,Output, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'lib-aba4',
  template: `
    <p>
    <h1>Teste</h1>

   
    <p>Funcionalidade vinda de uma library importada de outro projeto  atualizado :D</p>
  
  `,
  styles: [
  ]
})
export class Aba4Component implements OnInit {


  @Input() arraymensagens: Array<String>= [];

  @Output() public emitlower = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
          
    
    console.log("arraymensagens é:  *" + this.arraymensagens + "*")

    if(this.arraymensagens.length > 0){
            
      for(let i =0 ; i <=this.arraymensagens.length ; i++){

        this.arraymensagens[i] = this.arraymensagens[i].toLowerCase();
      }

      this.emitlower.emit(this.arraymensagens);
      }

    }

}
