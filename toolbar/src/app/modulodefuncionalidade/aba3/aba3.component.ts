import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-aba3',
  templateUrl: './aba3.component.html',
  styleUrls: ['./aba3.component.scss']
})
export class Aba3Component {
  @Input() arraymensagens: Array<String> = [];

}
