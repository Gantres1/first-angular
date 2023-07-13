import { Component } from '@angular/core';
import { Bank } from 'src/app/models/bank';
import { Vopros } from 'src/app/models/vopros';
import { GlobalService } from 'src/app/sevices/global.service';

@Component({
  selector: 'app-bankedit',
  templateUrl: './bankedit.component.html',
  styleUrls: ['./bankedit.component.css']
})
export class BankeditComponent {
  vopros = new Vopros;
F(){
  return false
}
  Ch(i){  
    var area = document.querySelector('#tv' + i) as HTMLInputElement;   
    var result = document.getElementById("tv" + i).textContent.replace(this.globalService.cbank.quests[i].vopr, area.value);

    this.globalService.cbank.quests[i].vopr = result;
    return false;
  }
  constructor(public globalService: GlobalService) {}
}
