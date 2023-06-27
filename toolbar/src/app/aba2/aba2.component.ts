import { Component , Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aba2',
  templateUrl: './aba2.component.html',
  styleUrls: ['./aba2.component.scss']
})

export class Aba2Component implements OnInit{

  @Input() arraymensagens: Array<String> = [];

  ngOnInit(): void {
      console.log("aba2")
  }

}
