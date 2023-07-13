import { Component } from '@angular/core';
import { Bank } from 'src/app/models/bank';
import { Vopros } from 'src/app/models/vopros';
import { GlobalService } from 'src/app/sevices/global.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  itog:number = 0;
  vivod = "";
  constructor(public globalService: GlobalService) {}
  Check() {
    var inp = document.getElementsByClassName('form-check-input');
    for (let a = 0; a < this.globalService.cbank.quests.length; a++) {     
      for (var i = 0; i < inp.length; i++) {
        var radio = inp[i];
        if ((radio as HTMLInputElement).checked && (radio as HTMLInputElement).name == 'flexRadioDefault' + a && (radio as HTMLInputElement).value == 'true') {
          this.itog++;
        } else if ((radio as HTMLInputElement).checked && (radio as HTMLInputElement).name == 'flexRadioDefault' + a && (radio as HTMLInputElement).value == 'false'){
          continue;            
        }
      }
    }
    this.vivod = 'Вы решили ' + this.itog + '/' + this.globalService.cbank.quests.length
    this.itog = 0;
    return false;
  }
}
