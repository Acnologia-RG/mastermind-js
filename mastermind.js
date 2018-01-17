//const list//
const game = document.getElementById('game');
const colors = ["brown","lightblue","orange","green","pink","purple"];
const button = document.getElementsByTagName("button");
//var list//
var currentColors = [-1, -1, -1, -1];
var bullet_row = 0;
var picked
//randomcolor//
function getRandomColor() {
	var random = Math.floor(Math.random()*6);
	return colors[random];
}
function startGame() {
	creategame()
	picked = [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()];
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
		for(var score_column = 0; score_column < 4; score_column++){
		var bullet_score = document.createElement("div");
		bullet_score.setAttribute("id", "score_" + rowcount + "_" + score_column);
		bullet_score.setAttribute("class", "score");
		row.appendChild(bullet_score);
		}
		var buttons = document.createElement("button");
		buttons.setAttribute("onclick","check()");
		buttons.innerHTML = "check row";
		row.appendChild(buttons);
		game.appendChild(row);
	}
}
function setColor(a){
	var bullet = document.getElementById("bullet_" + bullet_row + "_" + a);
	currentColors[a]++;
	if (currentColors[a] == colors.length) {
		currentColors[a] = 0;
	}
	var index = currentColors[a];
	bullet.style.backgroundColor = colors[index];
}
function check(){
	console.log(picked); 
	for (var bullet_column=0; bullet_column<4; bullet_column++){
		var bullet = document.getElementById("bullet_" + bullet_row + "_" + bullet_column);
		var bullet_score = document.getElementById("score_" + bullet_row + "_" + bullet_column)
		if ( bullet.style.backgroundColor === picked[bullet_column]) {
			bullet_score.style.backgroundColor = "red";
			//red
			console.log("true")
		} else if (picked.includes(bullet.style.backgroundColor)){
			console.log("almost true")
			bullet_score.style.backgroundColor = "black";
			//black
		} else {
			console.log("not true")
		}
	}
	var countForwin = 0;
	for (var i = 0; i < 4; i++) {
		if(document.getElementById("bullet_"+bullet_row+"_"+i).style.backgroundColor == picked[i]){
			countForwin++;
		}
	}
	if(countForwin == 4){
		alert("you win!!!!");
	}
	currentColors = [-1, -1, -1, -1];
	bullet_row++;
}