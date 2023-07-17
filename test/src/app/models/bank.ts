import { Vopros} from "./vopros";

export class Bank {
    quests: Vopros[];
    
    constructor() {
        let vop = new Vopros;

        const fromDb = undefined; //      Без этой баллалайки
        this.quests = fromDb || [];//     не работает quests
        this.quests.push(vop);

        
        let vp = new Vopros;

        vp.vopr = 'Это тест?'
        vp.variants.length = 0;

        vp.variants[0] = {
            litera: "A",
            text: "Да",
            rez: true
        };

        vp.variants[1] = {
            litera: "B",
            text: "Нет",
            rez: false
        };

        this.quests[1] = vp;
    }
}