function shuffle(arr: Array<any>) {
	let len = arr.length;
	for (let i = len - 1; 0 <= i; i--) {
		let rIndex = Math.floor(Math.random() * (i + 1));
		let tmp = arr[rIndex];
		arr[rIndex] = arr[i];
		arr[i] = tmp;
	}
}

function match_recycle4(players: Array<String>): Array<any> {
	console.log(players);
	var games = [];
	var game1 = {
		index: "一",
		player_a1: players[0],
		player_a2: players[1],
		player_b1: players[2],
		player_b2: players[3],
	};
    games.push(game1);
        
    var game2 = {
		index: "二",
		player_a1: players[0],
		player_a2: players[2],
		player_b1: players[1],
		player_b2: players[3],
	};
    games.push(game2);
        
    var game3 = {
		index: "三",
		player_a1: players[0],
		player_a2: players[3],
		player_b1: players[1],
		player_b2: players[2],
	};
    games.push(game3);
	return games;
}

function match_recycle5(players: Array<String>): Array<any> {
	console.log(players);
	var games = [];
	var game1 = {
		index: "一",
		player_a1: players[0],
		player_a2: players[1],
		player_b1: players[2],
		player_b2: players[3],
	};
    games.push(game1);
        
    var game2 = {
		index: "二",
		player_a1: players[1],
		player_a2: players[2],
		player_b1: players[4],
		player_b2: players[3],
	};
	games.push(game2);
    
    var game3 = {
    	index: "三",
    	player_a1: players[0],
    	player_a2: players[4],
    	player_b1: players[1],
		player_b2: players[3],
	}
	games.push(game3);
        
    var game4 = {
		index: "四",
		player_a1: players[0],
		player_a2: players[2],
		player_b1: players[1],
		player_b2: players[4],
	};
    games.push(game4);
        
    var game5 = {
		index: "五",
		player_a1: players[0],
		player_a2: players[3],
		player_b1: players[4],
		player_b2: players[2],
	};
    games.push(game5);
	return games;
}

function match_recycle8(players: Array<String>): Array<any> {
	console.log(players);
	var games = [];
	var game1 = {
		index: "一",
		player_a1: players[0],
		player_a2: players[1],
		player_b1: players[2],
		player_b2: players[3],
	};
	games.push(game1);

	var game2 = {
		index: "二",
		player_a1: players[4],
		player_a2: players[5],
		player_b1: players[6],
		player_b2: players[7],
	};
	games.push(game2);

	var game3 = {
		index: "三",
		player_a1: players[0],
		player_a2: players[2],
		player_b1: players[1],
		player_b2: players[3],
	};
	games.push(game3);

	var game4 = {
		index: "四",
		player_a1: players[4],
		player_a2: players[6],
		player_b1: players[5],
		player_b2: players[7],
	};
	games.push(game4);

	var game5 = {
		index: "五",
		player_a1: players[0],
		player_a2: players[3],
		player_b1: players[1],
		player_b2: players[2],
	};
	games.push(game5);

	var game6 = {
		index: "六",
		player_a1: players[4],
		player_a2: players[7],
		player_b1: players[5],
		player_b2: players[6],
	};
	games.push(game6);

	var game7 = {
		index: "七",
		player_a1: players[0],
		player_a2: players[4],
		player_b1: players[1],
		player_b2: players[5],
	};
	games.push(game7);

	var game8 = {
		index: "八",
		player_a1: players[2],
		player_a2: players[6],
		player_b1: players[3],
		player_b2: players[7],
	};
	games.push(game8);

	var game9 = {
		index: "九",
		player_a1: players[0],
		player_a2: players[5],
		player_b1: players[1],
		player_b2: players[4],
	}
	games.push(game9);

	var game10 = {
		index: "十",
		player_a1: players[2],
		player_a2: players[7],
		player_b1: players[3],
		player_b2: players[6],
	}
	games.push(game10);

	var game11 = {
		index: "十一",
		player_a1: players[0],
		player_a2: players[6],
		player_b1: players[1],
		player_b2: players[7],
	}
	games.push(game11);

	var game12 = {
		index: "十二",
		player_a1: players[2],
		player_a2: players[4],
		player_b1: players[3],
		player_b2: players[5],
	}
	games.push(game12);

	var game13 = {
		index: "十三",
		player_a1: players[0],
		player_a2: players[7],
		player_b1: players[1],
		player_b2: players[6],
	};
	games.push(game13);

	var game14 = {
		index: "十四",
		player_a1: players[2],
		player_a2: players[5],
		player_b1: players[3],
		player_b2: players[4],
	};
	games.push(game14);
	return games;
}

function match_recycle9(players: Array<String>): Array<any> {
	console.log(players);
	var games = [];
	var game1 = {
		index: "一",
		player_a1: players[0],
		player_a2: players[8],
		player_b1: players[2],
		player_b2: players[3],
	};
    games.push(game1);
        
    var game2 = {
		index: "二",
		player_a1: players[4],
		player_a2: players[5],
		player_b1: players[6],
		player_b2: players[7],
	};
    games.push(game2);
        
    var game3 = {
		index: "三",
		player_a1: players[2],
		player_a2: players[8],
		player_b1: players[1],
		player_b2: players[3],
	};
    games.push(game3);
        
    var game4 = {
		index: "四",
		player_a1: players[4],
		player_a2: players[6],
		player_b1: players[5],
		player_b2: players[7],
	};
    games.push(game4);
        
    var game5 = {
		index: "五",
		player_a1: players[0],
		player_a2: players[3],
		player_b1: players[1],
		player_b2: players[2],
	};
    games.push(game5);
    
    var game6 = {
		index: "六",
		player_a1: players[4],
		player_a2: players[8],
		player_b1: players[5],
		player_b2: players[6],
	};
    games.push(game6);
        
    var game7 = {
		index: "七",
		player_a1: players[0],
		player_a2: players[4],
		player_b1: players[1],
		player_b2: players[5],
	};
    games.push(game7);
    
    var game8 = {
		index: "八",
		player_a1: players[2],
		player_a2: players[6],
		player_b1: players[3],
		player_b2: players[7],
	};
    games.push(game8);
    
    var game9 = {
		index: "九",
		player_a1: players[0],
		player_a2: players[5],
		player_b1: players[1],
		player_b2: players[4],
	};
    games.push(game9);
    
    var game10 = {
		index: "十",
		player_a1: players[2],
		player_a2: players[7],
		player_b1: players[3],
		player_b2: players[6],
	};
    games.push(game10);
    
    var game11 = {
		index: "十一",
		player_a1: players[8],
		player_a2: players[6],
		player_b1: players[1],
		player_b2: players[7],
	};
    games.push(game11);
    
    var game12 = {
		index: "十二",
		player_a1: players[2],
		player_a2: players[4],
		player_b1: players[3],
		player_b2: players[5],
	};
    games.push(game12);
    
    var game13 = {
		index: "十三",
		player_a1: players[0],
		player_a2: players[7],
		player_b1: players[1],
		player_b2: players[6],
	};
    games.push(game13);
    
    var game14 = {
		index: "十四",
		player_a1: players[8],
		player_a2: players[5],
		player_b1: players[3],
		player_b2: players[4],
	};
    games.push(game14);
    
    var game15 = {
		index: "十五",
		player_a1: players[0],
		player_a2: players[1],
		player_b1: players[3],
		player_b2: players[8],
	};
    games.push(game15);
    
    var game16 = {
		index: "十六",
		player_a1: players[2],
		player_a2: players[5],
		player_b1: players[7],
		player_b2: players[4],
	};
    games.push(game16);
    
    var game17 = {
		index: "十七",
		player_a1: players[8],
		player_a2: players[1],
		player_b1: players[0],
		player_b2: players[2],
	};
    games.push(game17);
    
    var game18 = {
		index: "十八",
		player_a1: players[0],
		player_a2: players[6],
		player_b1: players[7],
		player_b2: players[8],
	};
    games.push(game18);
	return games;
}

var ALGORITHM = {
	start_match(players: Array<String>) {
		var games = [];
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
