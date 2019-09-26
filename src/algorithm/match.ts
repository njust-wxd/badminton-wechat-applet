import { BMGame } from "@/algorithm/game";

function shuffle(arr: Array<any>) {
	let len = arr.length;
	for (let i = len - 1; 0 <= i; i--) {
		let rIndex = Math.floor(Math.random() * (i + 1));
		let tmp = arr[rIndex];
		arr[rIndex] = arr[i];
		arr[i] = tmp;
	}
}

function match_recycle4(players: Array<string>): Array<any> {
	console.log(players);
	let games : Array<BMGame> = [];
	let game1 = new BMGame("一");
	game1.player_a1 = players[0];
	game1.player_a2 = players[1];
	game1.player_b1 = players[2];
	game1.player_b2 = players[3];
    games.push(game1);
        
    let game2 = new BMGame("二");
	game2.player_a1 =  players[0];
	game2.player_a2 = players[2];
	game2.player_b1 = players[1];
	game2.player_b2 = players[3];
    games.push(game2);
        
    let game3 = new BMGame("三");
	game3.player_a1 = players[0];
	game3.player_a2 = players[3];
	game3.player_b1 = players[1];
	game3.player_b2 = players[2];
    games.push(game3);
	return games;
}

function match_recycle5(players: Array<string>): Array<any> {
	console.log(players);
	let games : Array<BMGame> = [];
	let game1 = new BMGame("一");
	game1.player_a1 = players[0];
	game1.player_a2 = players[1];
	game1.player_b1 = players[2];
	game1.player_b2 = players[3];
    games.push(game1);

    let game2 = new BMGame("二");
	game2.player_a1 = players[1];
	game2.player_a2 = players[2];
	game2.player_b1 = players[4];
	game2.player_b2 = players[3];
	games.push(game2);
    
    let game3 = new BMGame("三");
	game3.player_a1 = players[0];
	game3.player_a2 = players[4];
	game3.player_b1 = players[1];
	game3.player_b2 = players[3];
	games.push(game3);
        
    let game4 = new BMGame("四");
	game4.player_a1 = players[0];
	game4.player_a2 = players[2];
	game4.player_b1 = players[1];
	game4.player_b2 = players[4];
    games.push(game4);

    let game5 = new BMGame("五");
	game5.player_a1 = players[0];
	game5.player_a2 = players[3];
	game5.player_b1 = players[4];
	game5.player_b2 = players[2];
    games.push(game5);
	return games;
}

function match_recycle8(players: Array<string>): Array<any> {
	console.log(players);
	let games : Array<BMGame> = [];
	let game1 =  new BMGame("一");
	game1.player_a1 = players[0];
	game1.player_a2 = players[1];
	game1.player_b1 = players[2];
	game1.player_b2 = players[3];
	games.push(game1);

	let game2 = new BMGame("二");
	game2.player_a1 = players[4];
	game2.player_a2 = players[5];
	game2.player_b1 = players[6];
	game2.player_b2 = players[7];
	games.push(game2);

	let game3 = new BMGame("三");
	game3.player_a1 = players[0];
	game3.player_a2 = players[2];
	game3.player_b1 = players[1];
	game3.player_b2 = players[3];
	games.push(game3);

	let game4 = new BMGame("四");
	game4.player_a1 = players[4];
	game4.player_a2 = players[6];
	game4.player_b1 = players[5];
	game4.player_b2 = players[7];
	games.push(game4);

	let game5 = new BMGame("五");
	game5.player_a1 = players[0];
	game5.player_a2 = players[3];
	game5.player_b1 = players[1];
	game5.player_b2 = players[2];
	games.push(game5);

	let game6 = new BMGame("六");
	game6.player_a1 = players[4];
	game6.player_a2 = players[7];
	game6.player_b1 = players[5];
	game6.player_b2 = players[6];
	games.push(game6);

	let game7 = new BMGame("七");
	game7.player_a1 = players[0];
	game7.player_a2 = players[4];
	game7.player_b1 = players[1];
	game7.player_b2 = players[5];
	games.push(game7);

	let game8 = new BMGame("八");
	game8.player_a1 = players[2];
	game8.player_a2 = players[6];
	game8.player_b1 = players[3];
	game8.player_b2 = players[7];
	games.push(game8);

	let game9 = new BMGame("九");
	game9.player_a1 = players[0];
	game9.player_a2 = players[5];
	game9.player_b1 = players[1];
	game9.player_b2 = players[4];
	games.push(game9);

	let game10 = new BMGame("十");
	game10.player_a1 = players[2];
	game10.player_a2 = players[7];
	game10.player_b1 = players[3];
	game10.player_b2 = players[6];
	games.push(game10);

	let game11 = new BMGame("十一");
	game11.player_a1 = players[0];
	game11.player_a2 = players[6];
	game11.player_b1 = players[1];
	game11.player_b2 = players[7];
	games.push(game11);

	let game12 = new BMGame("十二");
	game12.player_a1 = players[2];
	game12.player_a2 = players[4];
	game12.player_b1 = players[3];
	game12.player_b2 = players[5];
	games.push(game12);

	let game13 = new BMGame("十三");
	game13.player_a1 = players[0];
	game13.player_a2 = players[7];
	game13.player_b1 = players[1];
	game13.player_b2 = players[6];
	games.push(game13);

	let game14 = new BMGame("十四");
	game14.player_a1 = players[2],
	game14.player_a2 = players[5],
	game14.player_b1 = players[3],
	game14.player_b2 = players[4],
	games.push(game14);
	return games;
}

function match_recycle9(players: Array<string>): Array<any> {
	console.log(players);
	let games : Array<BMGame> = [];
	let game1 = new BMGame("一");
	game1.player_a1 = players[0];
	game1.player_a2 = players[8];
	game1.player_b1 = players[2];
	game1.player_b2 = players[3];
    games.push(game1);
        
    let game2 = new BMGame("二");
	game2.player_a1 = players[4];
	game2.player_a2 = players[5];
	game2.player_b1 = players[6];
	game2.player_b2 = players[7];
    games.push(game2);
        
    let game3 = new BMGame("三");
	game3.player_a1 = players[2];
	game3.player_a2 = players[8];
	game3.player_b1 = players[1];
	game3.player_b2 = players[3];
    games.push(game3);
        
    let game4 = new BMGame("四");
	game4.player_a1 = players[4];
	game4.player_a2 = players[6];
	game4.player_b1 = players[5];
	game4.player_b2 = players[7];
    games.push(game4);
        
    let game5 = new BMGame("五");
	game5.player_a1 = players[0];
	game5.player_a2 = players[3];
	game5.player_b1 = players[1];
	game5.player_b2 = players[2];
    games.push(game5);
    
    let game6 = new BMGame("六");
	game6.player_a1 = players[4];
	game6.player_a2 = players[8];
	game6.player_b1 = players[5];
	game6.player_b2 = players[6];
    games.push(game6);
        
    let game7 = new BMGame("七");
	game7.player_a1 = players[0];
	game7.player_a2 = players[4];
	game7.player_b1 = players[1];
	game7.player_b2 = players[5];
    games.push(game7);
    
    let game8 = new BMGame("八");
	game8.player_a1 = players[2];
	game8.player_a2 = players[6];
	game8.player_b1 = players[3];
	game8.player_b2 = players[7];
    games.push(game8);
    
    let game9 = new BMGame("九");
	game9.player_a1 = players[0];
	game9.player_a2 = players[5];
	game9.player_b1 = players[1];
	game9.player_b2 = players[4];
    games.push(game9);
    
    let game10 = new BMGame("十");
	game10.player_a1 = players[2];
	game10.player_a2 = players[7];
	game10.player_b1 = players[3];
	game10.player_b2 = players[6];
    games.push(game10);
    
    let game11 = new BMGame("十一");
	game11.player_a1 = players[8];
	game11.player_a2 = players[6];
	game11.player_b1 = players[1];
	game11.player_b2 = players[7];
    games.push(game11);
    
    let game12 = new BMGame("十二");
	game12.player_a1 = players[2];
	game12.player_a2 = players[4];
	game12.player_b1 = players[3];
	game12.player_b2 = players[5];
    games.push(game12);
    
    let game13 = new BMGame("十三");
	game13.player_a1 = players[0];
	game13.player_a2 = players[7];
	game13.player_b1 = players[1];
	game13.player_b2 = players[6];
    games.push(game13);
    
    let game14 = new BMGame("十四");
	game14.player_a1 = players[8];
	game14.player_a2 = players[5];
	game14.player_b1 = players[3];
	game14.player_b2 = players[4];
    games.push(game14);
    
    let game15 = new BMGame("十五");
	game15.player_a1 = players[0];
	game15.player_a2 = players[1];
	game15.player_b1 = players[3];
	game15.player_b2 = players[8];
    games.push(game15);
    
    let game16 = new BMGame("十六");
	game16.player_a1 = players[2];
	game16.player_a2 = players[5];
	game16.player_b1 = players[7];
	game16.player_b2 = players[4];
    games.push(game16);
    
    let game17 = new BMGame("十七");
	game17.player_a1 = players[8];
	game17.player_a2 = players[1];
	game17.player_b1 = players[0];
	game17.player_b2 = players[2];
    games.push(game17);
    
    let game18 = new BMGame("十八");
	game18.player_a1 = players[0];
	game18.player_a2 = players[6];
	game18.player_b1 = players[7];
	game18.player_b2 = players[8];
    games.push(game18);
	return games;
}

var ALGORITHM = {
	start_match(players: Array<string>) {
		let games : Array<BMGame> = [];
		shuffle(players);
		switch (players.length) {
			case 4:
				games = match_recycle4(players);
				break;
			case 5:
				games = match_recycle5(players);
				break;
			case 8:
				games = match_recycle8(players);
				break;
			case 9:
				games = match_recycle9(players);
				break;
			default:
				console.log("抱歉，暂不支持！");
				break;
		}
		return games;
	}
}

export default ALGORITHM;
