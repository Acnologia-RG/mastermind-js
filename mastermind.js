
//const list//
const game = document.getElementById('game');
const colors = ["red","blue","orange","green","yellow","purple"];
const button = document.getElementsByTagName("button");
//var list//
var currentColors = [-1, -1, -1, -1]


//randomcolor//
function getRandomColor() {
	var random = Math.floor(Math.random()*6);
	return colors[random];
}

function startGame() {
	creategame()
	var picked = [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()];
	console.log(picked);
}


//generate the board//
function creategame(){
	for (rowcount=0; rowcount<12; rowcount++) {
		var row = document.createElement("div");
		row.setAttribute("id","row_"+rowcount);
		for (var column=0; column<4; column++) {
		var bullet = document.createElement("div");
		bullet.setAttribute("id","bullet_"+ rowcount +"_"+ column);
		bullet.setAttribute("class","bullet");
		bullet.setAttribute("onclick","setColor("+column+")");
		row.appendChild(bullet);
		}
		game.appendChild(row);
	}
}

function setColor(a){
	var bullet = document.getElementById("bullet_0_" + a);
	currentColors[a]++;
	if (currentColors[a] == colors.length) {
		currentColors[a] = 0;
	}
	var index = currentColors[a];
	bullet.style.backgroundColor = colors[index];
}







































