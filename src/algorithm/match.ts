function shuffle(arr: Array<any>) {
	let len = arr.length;
	for (let i = len - 1; 0 <= i; i--) {
		let rIndex = Math.floor(Math.random() * (i + 1));
		let tmp = arr[rIndex];
		arr[rIndex] = arr[i];
		arr[i] = tmp;
	}
}

function match_recycle4(players: Array<String>) {
	console.log(players);
}

function match_recycle5(players: Array<String>) {
	console.log(players);
}

function match_recycle8(players: Array<String>) {
	console.log(players);
}

function match_recycle9(players: Array<String>) {
	console.log(players);
}

var ALGORITHM = {
	start_match(players: Array<String>) {
		shuffle(players);
		switch (players.length) {
			case 4:
				match_recycle4(players);
				break;
			case 5:
				match_recycle5(players);
				break;
			case 8:
				match_recycle8(players);
				break;
			case 9:
				match_recycle9(players);
				break;
			default:
				console.log("抱歉，暂不支持！");
				break;
		}
		return players;
	}
}

export default ALGORITHM;
