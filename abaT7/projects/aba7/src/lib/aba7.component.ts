import { Component } from '@angular/core';
import { Input,Output, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'lib-aba7',
  template: `
    <p>
    <h1>To Lowercase</h1>

    <ul>
        <li *ngFor="let mensagem of this.arraymensagens ">
            <p> {{mensagem}}</p>                     
        </li>
    </ul>

    <p>Funcionalidade vinda de uma library importada de outro projeto :D</p>
  
  `,
  styles: [
  ]
})
export class Aba7Component implements OnInit {


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
