import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-aba2',
  templateUrl: './aba2.component.html',
  styleUrls: ['./aba2.component.scss']
})

export class Aba2Component {

  @Input() arraymensagens: Array<String> = [];

}
