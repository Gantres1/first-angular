import { Component, OnInit} from '@angular/core';
import { Vopros, Otvet } from 'src/app/models/vopros';
import { GlobalService } from 'src/app/sevices/global.service';



@Component({
  selector: 'app-parsing',
  templateUrl: './parsing.component.html',
  styleUrls: ['./parsing.component.css']
})
export class ParsingComponent {
  vopr = new Vopros;
  constructor(private dataService: GlobalService) {}

  ParseAiken(a:string){
    
    let ans:number = a.indexOf("ANSWER: ");
    let verno:string = a.substring(ans + 8, ans + 9);


    /*let g:number = 0;
    while(g = a.indexOf("ANSWER: ", g), g >= 0){
      let verno:string = a.substring(g + 8, g + 9);
      g = a.lastIndexOf('\n\n', g);
      let vopr = new Vopros;
    }*/

    const fromDb = undefined;         //      Без этой баллалайки
    this.vopr.variants = fromDb || [];//      не работает variants

    let g:number = ans;

    while(a.lastIndexOf('\n', g - 1) >= 0){
      let litera:string;
      let text:string;
      let rez:boolean;

      let toch:number = a.lastIndexOf('.', g - 1);

      litera = a.substring(toch - 1, toch);
      text = a.substring(toch +2, a.indexOf('\n', toch + 1))

      if(litera == verno){
        rez = true;
      }
      else{
        rez = false;
      }

      g = a.lastIndexOf('.', toch);

      let otv:Otvet = {
        litera: litera,
        text: text,
        rez: rez
      };
      
      this.vopr.variants.unshift(otv);
    }
    let s:number = a.indexOf('.') - 2;
    this.vopr.vopr = a.substring(a.lastIndexOf('\n', s - 1) + 1, s);

    
    return false;
   
  }
}