import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-aba1',
  templateUrl: './aba1.component.html',
  styleUrls: ['./aba1.component.scss']
})
export class Aba1Component {

  @Output() public emitmensagem = new EventEmitter();

  public mensagem: string = "";
  
  constructor(){}
  
  public submitmensagem(): void{
  
    this.mensagem= this.mensagem.trim();
    
    if(this.mensagem){
    this.emitmensagem.emit(this.mensagem);
   this.mensagem = "";
    }


}

}
