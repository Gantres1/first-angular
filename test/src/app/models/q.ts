export class Vopros {
    vopr:string;
    variants: Otvet[];
  
    constructor() {
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

        otv = {
            litera: "2",
            text: "Херого",
            rez: false
        };
        this.variants[3] = otv;

    }

}

interface Otvet {
    litera: string,
    text: string,
    rez: boolean
}