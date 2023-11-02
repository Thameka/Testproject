var startScreen
var gameScreen
var choiceBox
var nextBox


window.onload = () => {
startScreen = document.getElementById("startScreen");
gameScreen = document.getElementById("gameScreen");
choiceBox = document.getElementById("choiceBox");
nextBox = document.getElementById("nextBox");
gameScreen.hidden = true;
choiceBox.hidden = true;
nextBox.hidden = true;
}

function startGame() {
    debugger;
    startScreen.hidden = true;
    gameScreen.hidden = false;
    nextBox.hidden = false;
}

function NBoff() {
    nextBox.hidden= true;
    choiceBox.hidden= false;
}