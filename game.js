var startScreen
var gameScreen
var choiceBox
var nextBox
var nextButton
var textSpeed
var volume
var imgcharacterSprite
var imgCS
var background
var lbText 
var lbCS



  
//#functions 
window.onload = () => {
    startScreen = document.getElementById("startScreen");
    gameScreen = document.getElementById("gameScreen");
    choiceBox = document.getElementById("choiceBox");
    nextBox = document.getElementById("nextBox");
    startScreen.style.display = "block";
    gameScreen.style.display = "none";
    choiceBox.style.display = "none";
    nextBox.style.display = "block";
}

function startGame() {
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
}

function NBoff() {
    nextBox.style.display=  "none";
    choiceBox.style.display= "block";
}

