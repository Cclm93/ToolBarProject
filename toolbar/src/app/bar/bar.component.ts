import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent {

public aba1: boolean =false;
public aba2: boolean =false;
public aba3: boolean =false;
public aba7: boolean =false;
public mensagens: Array<String> = [];

constructor(){}

public renderaba1(){
  this.aba1=true;
  this.aba2=false;
  this.aba3=false;
  this.aba7=false;
}

public renderaba2(){
  this.aba1=false;
  this.aba2=true;
  this.aba3=false;
  this.aba7=false;
}

public renderaba3(){
  this.aba1=false;
  this.aba2=false;
  this.aba3=true;
  this.aba7=false;
}

public renderaba7(){
  this.aba1=false;
  this.aba2=false;
  this.aba3=false;
  this.aba7=true;
}

public setEmit(event : string) {
  this.mensagens.push(event);
  console.log(this.mensagens);
 
}

public setUpper( event: Array<String>){
this.mensagens = event
}


}