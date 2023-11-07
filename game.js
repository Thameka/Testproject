var startScreen
var gameScreen
var choiceBox
var nextBox
var nextButton
var lbtext
var lbname


//#classes
class character {
    constructor(name, sprite, audio) {
        this.sprite = "/sprites/placeholder.png";
        this.audio =  "/sprites/sfx-meow.wav";
        this.name = name;
    }
}

class dialog {
    constructor(character, text) {
        this.character = character;
        this.text = text;
    }
}

//#functions 
window.onload = () => {
    startScreen = document.getElementById("startScreen");
    gameScreen = document.getElementById("gameScreen");
    choiceBox = document.getElementById("choiceBox");
    nextBox = document.getElementById("nextBox");
    lbtext = document.getElementById("lbtext");
    lbname = document.getElementById("lbname");

    startScreen.style.display = "block";
    gameScreen.style.display = "none";
    choiceBox.style.display = "none";
    nextBox.style.display = "block";
}

function startGame() {
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
    Next();
}

function NBoff() {
    nextBox.style.display = "none";
    choiceBox.style.display = "block";
}

var LittleSnake = new character("Little Snake");

var Scene = [
    new dialog(LittleSnake, "hellow world UwU"),
    new dialog(LittleSnake, "Ssssssssssssssssssssssssssss"),
]

var currentdialog = 0;

function Next() { 
    var dialog = Scene[currentdialog];
    lbtext.innerHTML = dialog.text;
    lbname.innerHTML = dialog.character.name;
    currentdialog++;
}

