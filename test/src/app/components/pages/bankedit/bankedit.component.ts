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
  literaData  = ['A','B','C','D','E','F','G','H','I','J'];

  Del(a,i){
    var div = document.querySelector('#div' + a + "" + i);
    var div2 = div.parentNode;
    div2.removeChild(div);   
    return false;
  }
  Ch(a){  
    var area = document.querySelector('#tv' + a) as HTMLInputElement;   
    var inp = Array.from(document.getElementsByClassName('form-check' + a));
    let arr = this.literaData.slice();
    let x:number = 0;

    inp.forEach(i => {
      delete arr[arr.indexOf((i.querySelector('.varlitera') as HTMLInputElement).value)]
      x++;
    });
    for (let i = 0; i < x; i++) {
      if(arr[i]){
        alert("Нарушена литерация!!!");
        return false;
      }
    }
    this.vopros.variants.length = 0; 
    inp.forEach(i => {
      this.vopros.variants.push({
        text:(i.querySelector('.vartext') as HTMLInputElement).value,
        litera:(i.querySelector('.varlitera') as HTMLInputElement).value,
        rez:(i.querySelector('.form-check-input') as HTMLInputElement).checked,
      })
    });
    this.globalService.cbank.quests[a].vopr = area.value;  
    this.vopros.variants.sort((a, b) => a.litera > b.litera ? 1 : -1);
    this.globalService.cbank.quests[a].variants = this.vopros.variants;
    return false;
  }
  Add(a){
    if(this.globalService.cbank.quests[a].variants.length < 10){
      this.globalService.cbank.quests[a].variants[this.globalService.cbank.quests[a].variants.length] = {
        text:'',
        litera:this.literaData[this.globalService.cbank.quests[a].variants.length],
        rez:false,  
      }
    }else{
      alert("Превышение допустимого лимита!!!")
      return false;
    }
    return false
  }
  Zbros(a){
    (document.querySelector('#tv' + a) as HTMLInputElement).value = this.globalService.cbank.quests[a].vopr;
    return false;
  }
  constructor(public globalService: GlobalService) {}
}
