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

        vp.variants[0] = {
            litera: "1",
            text: "Да",
            rez: 'true'
        };

        vp.variants[1] = {
            litera: "2",
            text: "Нет",
            rez: 'false'
        };

        vp.variants[2] = {
            litera: "3",
            text: "Возможно",
            rez: 'false'
        };

        vp.variants[3] = {
            litera: "4",
            text: "Не знаю",
            rez: 'false'
        };
        
        this.quests[1] = vp;
    }
}