export class Vopros {
    vopr:string;
    variants: Otvet[];

    constructor() {

        this.vopr = "Как дела?";

        let otv:Otvet = {
          litera: "",
          text: "",
          rez: null
        };
        const fromDb = undefined; //      Без этой баллалайки
        this.variants = fromDb || [];//   не работает variants

        otv = {
            litera: "B",
            text: "Отлично",
            rez: true
        };
        this.variants[0] = otv;

        otv = {
            litera: "A",
            text: "Хорошо",
            rez: false
        };
        this.variants[1] = otv;

        otv = {
            litera: "C",
            text: "Плохо",
            rez: false
        };
        this.variants[2] = otv;

        otv = {
            litera: "D",
            text: "Херого",
            rez: false
        };
        this.variants[3] = otv;
    }
}

export interface Otvet {
    litera: string,
    text: string,
    rez: boolean
}