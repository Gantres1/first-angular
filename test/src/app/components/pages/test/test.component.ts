import { Component } from '@angular/core';
import { Bank } from 'src/app/models/bank';
import { Vopros } from 'src/app/models/vopros';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  bank = new Bank;
  vopros = new Vopros;
  itog1:number = 0;
  itog2:number = 0;
  final:number = null;
  vivod = '';

  Check() {
    var inp = document.getElementsByName('flexRadioDefault');
      for (var i = 0; i < inp.length; i++) {
        var radio = inp[i];
        if ((radio as HTMLInputElement).checked && (radio as HTMLInputElement).value.toString() == 'true') {
            this.itog1 = 1;
        } else if ((radio as HTMLInputElement).checked && (radio as HTMLInputElement).value.toString() == 'false'){
          this.itog1 = 0;            
        }
      }
    return false;
  }
  Check2() {
    var inp = document.getElementsByName('flexRadioDefault2');
      for (var i = 0; i < inp.length; i++) {
        var radio = inp[i];
        if ((radio as HTMLInputElement).checked && (radio as HTMLInputElement).value.toString() == 'true') {
          this.itog2 = 1;
        } else if ((radio as HTMLInputElement).checked && (radio as HTMLInputElement).value.toString() == 'false'){
          this.itog2 = 0;            
        }
      }
    this.final = this.itog1 + this.itog2;
    this.vivod = 'Решено ' + this.final + '/2'
    return false;
  }

}
