export class BMGame {
    readonly index: String;
    type: String = 'double';
    player_a1: String = '';
    player_a2: String = '';
    player_b1: String = '';
    player_b2: String = '';
    score_a: Number = 0;
    score_b: Number = 0;
    net_score_ab: Number = 0;
    net_score_ba: Number = 0;
    constructor(index: String) {
        this.index = index;
    }
}