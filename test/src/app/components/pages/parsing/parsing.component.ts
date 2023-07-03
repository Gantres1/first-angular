import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parsing',
  templateUrl: './parsing.component.html',
  styleUrls: ['./parsing.component.css']
})
export class ParsingComponent implements OnInit{

  vopr:string;
  variants: Otvet[];

  constructor() {}

  ParseAiken(a:string){
    let ans:number = a.indexOf("ANSWER: ");
    let verno:string = a.substring(ans + 8, ans + 9);
    console.log(verno)
    

    const fromDb = undefined; //      Без этой баллалайки
    this.variants = fromDb || [];//   не работает variants

    let g:number = ans;
    while(a.lastIndexOf('.', g - 1) >= 0){
      let litera:string;
      let text:string;
      let rez:boolean;

      let toch:number = a.lastIndexOf('.', g - 1);

      litera = a.substring(toch - 1, toch);
      console.log(litera.length);
      text = a.substring(toch +2, a.indexOf('\n', toch + 1))

      if(litera == verno){
        rez = true;
      }
      else{
        rez = false;
      }
      
      console.log(litera,text,rez);

      g = a.lastIndexOf('.', toch);

      let otv:Otvet = {
        litera: litera,
        text: text,
        rez: rez
      };
      
      this.variants.unshift(otv);
    }
    let s:number = a.indexOf('.') - 2;
    this.vopr = a.substring(a.lastIndexOf('\n', s - 1) + 1, s);
    console.log(this.variants[0].litera, this.variants[0].text, this.variants[0].rez);

    return false;
  }
  
  ngOnInit(){
    this.vopr = "Как дела?";

    let otv:Otvet = {
      litera: "1",
      text: "Отлично",
      rez: true
    };
    const fromDb = undefined; //      Без этой баллалайки
    this.variants = fromDb || [];//   не работает variants
    this.variants[0] = otv;
    this.variants[1] = otv;
    this.variants[2] = otv;
  }
}

interface Otvet {
  litera: string,
  text: string,
  rez: boolean
}
