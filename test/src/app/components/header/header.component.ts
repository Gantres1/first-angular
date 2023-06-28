import { Call } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
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
}
