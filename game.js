var startScreen
var gameScreen
var choiceBox
var nextBox

window.onload = () => {
    startScreen = document.getElementById("startScreen");
    gameScreen = document.getElementById("gameScreen");
    choiceBox = document.getElementById("choiceBox");
    nextBox = document.getElementById("nextBox");
    gameScreen.style.display = "none";
    choiceBox.style.display = "none";
    nextBox.style.display = "none";
}

function startGame() {
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
    nextBox.style.display = "block";
}

function NBoff() {
    nextBox.style.display=  "none";
    choiceBox.style.display= "block";
}
