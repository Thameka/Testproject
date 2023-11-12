var startScreen
var gameScreen
var choiceBox
var nextBox
var nextButton
var lbtext
var lbname
var imgSprite
var imgBackground


//#classes
class character {
    constructor(name, sprite) {
        this.sprite = sprite;
        this.name = name;
    }
}

class dialog {
    constructor(character, text) {
        this.character = character;
        this.text = text;
    }
}

class Background {
    constructor (img) {
        this.img = img
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
    imgSprite = document.getElementById("imgSprite");

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

var LittleSnake = new character("Little Snake", getSpriteURL("Littlesnake"));
var Ricky = new character("Ricky the Frog", getSpriteURL("Rickythefrog"));

var Scene = [
    new dialog(LittleSnake, "What a wonderful day! My house is warm and the flowers are always ssso lovely. The magical foresst is sssstrong today. A quiet sssstrength exudes from Her trees."),
    new dialog(LittleSnake, "But I have a sssmall problem I have to ssssolve! Indeed, my ssscales are losing sssoftnesss, I wonder where I could find some ointment for them..."),
    new dialog(LittleSnake, "Let'sss just take a sssmall walk in the foressst. I am sure the sssolution will come by itssself."),
];

var currentdialog = 0;

function Next() {
    var dialog = Scene[currentdialog];
    lbtext.innerHTML = dialog.text;
    lbname.innerHTML = dialog.character.name;
    currentdialog++;
    showSprite(dialog);
}

function showSprite(dialog) {
    img = dialog.character.sprite;
    imgSprite.src = img;
    debugger
}

function getSpriteURL(path) {
    return (new URL("sprites/" + path + ".png", document.location)).href;
}

function getBackgroundURL(path) {
    return (new URL("backgrounds/" + path + ".png", document.location)).href;
}

function showBackground(img) {
    img = getBackgroundURL(img);
    imgBackground.src = img;
}