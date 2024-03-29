export class BMGame {
    readonly id: number;
    readonly index: string;
    type: string = 'double';
    player_a1: string = '';
    player_a2: string = '';
    player_b1: string = '';
    player_b2: string = '';
    score_a: string = '';
    score_b: string = '';
    net_score_ab: number = 0;
    net_score_ba: number = 0;
    constructor(id: number, index: string) {
        this.id = id;
        this.index = index;
    }
}