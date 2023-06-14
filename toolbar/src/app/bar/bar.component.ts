import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent {

public aba1: boolean =false;
public aba2: boolean =false;
public abaextra: boolean =false;
public mensagens: Array<String> = [];

constructor(){}

public renderaba1(){
  this.aba1=true;
  this.aba2=false;
  this.abaextra=false;
}

public renderaba2(){
  this.aba1=false;
  this.aba2=true;
  this.abaextra=false;
}

public renderabaextra(){
  this.aba1=false;
  this.aba2=false;
  this.abaextra=true;
}

public setEmit(event : string) {
  this.mensagens.push(event);
  console.log(this.mensagens);

  
}


}