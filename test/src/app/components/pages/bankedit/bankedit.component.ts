import { Component, Input } from '@angular/core';
import { Bank } from 'src/app/models/bank';
import { Vopros, Otvet } from 'src/app/models/vopros';
import { GlobalService } from 'src/app/sevices/global.service';

@Component({
  selector: 'app-bankedit',
  templateUrl: './bankedit.component.html',
  styleUrls: ['./bankedit.component.css']
})
export class BankeditComponent {
  vopros = new Vopros;
  Del(a,i){
    var div = document.querySelector('#div' + a + "" + i);
    var div2 = div.parentNode;
    div2.removeChild(div);
    return false;
  }
  Ch(a){  
    var area = document.querySelector('#tv' + a) as HTMLInputElement;   
    this.globalService.cbank.quests[a].vopr = area.value;  
 
    var inp = Array.from(document.getElementsByClassName('form-check' + a));
    this.vopros.variants.length = 0;
    inp.forEach(i => {
      this.vopros.variants.push({
        text:(i.querySelector('.vartext') as HTMLInputElement).value,
        litera:(i.querySelector('.varlitera') as HTMLInputElement).value,
        rez:(i.querySelector('.form-check-input') as HTMLInputElement).checked,
      })
    });
    this.vopros.variants.sort((a, b) => a.litera > b.litera ? 1 : -1);
    this.globalService.cbank.quests[a].variants = this.vopros.variants;
    return false;
  }
  Zbros(a){
    var area = document.querySelector('#tv' + a) as HTMLInputElement; 
    area.value = this.globalService.cbank.quests[a].vopr;
    return false
  }
  constructor(public globalService: GlobalService) {}
}
