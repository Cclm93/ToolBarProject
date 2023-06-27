import { Component,Input,Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aba3',
  templateUrl: './aba3.component.html',
  styleUrls: ['./aba3.component.scss']
})
export class Aba3Component implements OnInit{
  @Input() arraymensagens: Array<String> = [];

  @Output() public emitupper = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
      
    console.log("aba3")

    if(this.arraymensagens.length > 0){
            
      for(let i =0 ; i <=this.arraymensagens.length ; i++){

        this.arraymensagens[i] = this.arraymensagens[i].toUpperCase();
      }

      this.emitupper.emit(this.arraymensagens);
      }
  }


}
