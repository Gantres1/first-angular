import { Component } from '@angular/core';
import { Vopros } from '../../../models/vopros';
@Component({
  selector: 'app-qview',
  templateUrl: './qview.component.html',
  styleUrls: ['./qview.component.css']
})
export class QviewComponent {
  vop = new Vopros;
  rezult:string = '';
  

  v: string ="";
  vopr: string = "Как дела?";
  otv: string[] = ["Норм", "Плохо", "Отлично"];
  rez: string = "";
  constructor() {}

  Pereb(){
    this.v = "";
    this.otv.forEach((text, i) => {
      this.v = this.v + (i+1) + " - " + text + '\n';
    })
    return this.v;
  }

  Func (stri: string){
    if (stri === "1"){
        this.rez = 'Не правильно';
    }
    else if (stri === "2"){
      this.rez = 'Не правильно';
    }
    else if (stri === "3"){
      this.rez = 'Правильно';
    }
    else if (stri === ""){
      this.rez = "Ничего не введено"
    }
    else {
      this.rez = 'Введена чушь'
    }
    return false;
  }

  Check() {
    var inp = document.getElementsByName('flexRadioDefault');
      for (var i = 0; i < inp.length; i++) {
        var radio = inp[i];
        if ((radio as HTMLInputElement).checked && (radio as HTMLInputElement).value.toString() == 'true') {
            this.rezult = 'Правильно';
        } else if ((radio as HTMLInputElement).checked && (radio as HTMLInputElement).value.toString() == 'false'){
            this.rezult = 'Неправильно';
        }
      }
    return false;
  }
}
