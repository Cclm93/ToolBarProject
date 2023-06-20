import { Component,Input,Output, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-aba4',
  templateUrl: './aba4.component.html',
  styleUrls: ['./aba4.component.scss']
})
export class Aba4Component implements OnInit{


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


