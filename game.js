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
    constructor(img) {
        this.img = img
    }
}

class Scene {
    constructor(conversation) {
        this.conversation = conversation;
    }
}

class Conv {
    constructor(events) {
        this.events = events;
    }
}

class ChangeScene {
    constructor(scene) {
        this.scene = scene;
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
    imgBackground = document.getElementById("imgBackground");

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
var Ricky = new character("Ricky", getSpriteURL("Rickythefrog"));

var Scene1 = new Scene([

    new Conv([
        new Background(getBackgroundURL("foresthouse")),
        new dialog(LittleSnake, "What a wonderful day! My house is warm and the flowers are always ssso lovely. The magical foresst is sssstrong today. A quiet sssstrength exudes from Her trees."),
        new dialog(LittleSnake, "But I have a sssmall problem I have to ssssolve! Indeed, my ssscales are losing sssoftnesss, I wonder where I could find some ointment for them..."),
        new dialog(LittleSnake, "Let'sss just take a sssmall walk in the foressst. I am sure the sssolution will come by itssself."),
        new dialog(Ricky, "Oh hi Little Snake, what are you doing here?"),
        new dialog(LittleSnake, "Ricky! What a good sssurprise! I was going to the foresst for a little walk. Do you want to come with me?"),
        new dialog(Ricky, "Of course ! You know I love walks in the forest. I was myself heading to the pond!"),
        new dialog(LittleSnake, "The pond! What a grandiose idea. Let'ss go to the pond!"),
        new dialog(LittleSnake, "<i>(Maybe I will find some ointment there...)</i>"),
        new Background(getBackgroundURL("redforest")),
        new dialog(LittleSnake, "Wow! The foresst is very pretty! What happened?"),
    ]),

    new Conv([
        new Background(getBackgroundURL("forestpond")),
        new dialog(Ricky, "There we go! My favourite pond."),
        new dialog(LittleSnake, "Ricky! I didn't know thissss pond even exissssted!"),
        new ChangeScene(Scene2),
    ]),
]);

var Scene2 = new Scene([

    new Conv([
        new Background(getBackgroundURL("redforest")),
        new dialog(Ricky, "Oops! we went back on that path and exited the pond."),
    ]),
]);

var currentdialog = 0;
var currentScene = Scene1;
var currentConv = 0;


function Next() {
    var event = currentScene[currentConv[currentdialog]];
    var conversation = currentScene[currentConv];
    currentdialog++;

    if (currentdialog == conversation.length) {
        currentConv++;
        Next()
    }

    if (event instanceof dialog) {
        lbtext.innerHTML = event.text;
        lbname.innerHTML = event.character.name;
        showSprite(event);
    }

    if (event instanceof Background) {
        showBackground(event);
        Next();
    }

    if (event instanceof ChangeScene) {
        changeScene(event.scene);
    }

}

function showSprite(event) {
    debugger;
    img = event.character.sprite;
    imgSprite.src = img;
}

function getSpriteURL(path) {
    return (new URL("sprites/" + path + ".png", document.location)).href;
}

function getBackgroundURL(path) {
    return (new URL("backgrounds/" + path + ".png", document.location)).href;
}

function showBackground(background) {
    var img = background.img;
    imgBackground.src = img;
}

function changeScene(scene) {
    currentScene = scene;
    currentConv = 0;
    currentdialog = 0;
    Next();
}

function changeConv(conv) {
    currentConv = conv;
    currentdialog = 0;
}