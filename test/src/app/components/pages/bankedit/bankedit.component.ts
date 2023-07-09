import { Component } from '@angular/core';
import { Bank } from 'src/app/models/bank';

@Component({
  selector: 'app-bankedit',
  templateUrl: './bankedit.component.html',
  styleUrls: ['./bankedit.component.css']
})
export class BankeditComponent {
  bank = new Bank();
  l:number;
  
  constructor() {
}
}
