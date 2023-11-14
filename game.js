var startScreen
var gameScreen
var choiceBox
var nextBox
var nextButton
var lbtext
var lbname
var imgSprite
var imgBackground
var Namebox
var volume 
var textSpeed

//#classes
class character {
    constructor(name, sprite, voice) {
        this.sprite = sprite;
        this.name = name;
        this.voice = voice;
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

//#functions (1)
window.onload = () => {
    startScreen = document.getElementById("startScreen");
    gameScreen = document.getElementById("gameScreen");
    choiceBox = document.getElementById("choiceBox");
    nextBox = document.getElementById("nextBox");
    lbtext = document.getElementById("lbtext");
    lbname = document.getElementById("lbname");
    imgSprite = document.getElementById("imgSprite");
    imgBackground = document.getElementById("imgBackground");
    nextButton = document.getElementById("nextbtn");
    Namebox = document.getElementById("nameBox");
    textSpeed = document.getElementById("textSpeed");

    startScreen.style.display = "block";
    gameScreen.style.display = "none";
    choiceBox.style.display = "none";
    nextBox.style.display = "block";
}

function startGame() {
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
    volume = document.getElementById('volume').value;
    Next();
}

function Nameboxoff() {
    Namebox.style.display = "none";
}

function NameboxOn() {
    Namebox.style.display = "block";
}

function playHiss() {
var hiss = new Audio(getAudioURL("ssss")); 
hiss.play();
}

//#functions (1) END

//#characters
var LittleSnake = new character("Little Snake", getSpriteURL("Littlesnake"), new Audio(getAudioURL("Littlesnake")));
var Ricky = new character("Ricky the Frog", getSpriteURL("Rickythefrog"), new Audio(getAudioURL("Ricky")));
var Narrator = new character("", getSpriteURL("Narrator"), new Audio(getAudioURL("Narrator")));
//#characters END

//Scene 2
var Scene2 = new Scene([

    new Conv([
        new Background(getBackgroundURL("forest")),
        new dialog(LittleSnake, "But I don't sssseee anyone..."),
        new dialog(Ricky, "Have you tried looking up? Ribbit."), 
        new dialog(LittleSnake, "Oh! Hi!"),
    ]),
]);
//Scene 2 END

//Scene 1
var Scene1 = new Scene([

    new Conv([
        new Background(getBackgroundURL("housefield")),
        new dialog(Narrator, "Somewhere in a place invisible to humans, laid a powerful magical forest. She was alive, and always oh-so-surprising-- sometimes happy, sometimes angry, sometimes sick. But that day, as the sun shone on the Valley, the forest exuded strength and joy."),
        new dialog(Narrator, "Just outside of the forest, in the middle of a poppy field, a modest yet heartwarming hut could be seen : it was Little Snake's home."),
        new dialog(Narrator, "Little Snake had been peacefully living in this hut for as long as she could remember. Free of any serious worries, her preoccupations were somewhat limited to her daily activities... and to the maintenance of her extraordinary soft, adorable scales."),
        new dialog(Narrator, "Speaking of which, on this very sunny day, Little Snake seemed... somewhat troubled."),
        new dialog(LittleSnake, "What a wonderful day! My house is warm and the flowers are always ssso lovely. The magical foresst is sssstrong today. However, I find myssself a wee bit worried..."),
        new dialog(LittleSnake, "Indeed, my ssscales are losing sssoftnesss! To the touch, they are not reminisssscent of the Bear's fur anymore. They're more like... The mossssss on the walls of my hut."),
        new dialog(LittleSnake, "What could I do... Ah! Woe is me."),
        new dialog(Ricky, "Oh hello, Little Snake! Ribbit."),
        new dialog(LittleSnake, "Ricky! What a good sssurprise! The Valley is ever so beautiful today, but I have a ssssmall problem..."),
        new dialog(Ricky, "A small problem? Oh no! What happened?"),
        new dialog(LittleSnake, "I woke up today with my ssssscales as coarsssse as mossssss!"),
        new dialog(Ricky, "Is that true?"),
        new dialog(LittleSnake, "Yessssss. Check by yoursself..."),
        new dialog(Narrator, "Little Snake slithered shyly towards her friend, who stroke her scales of his palmy hand. He gasped with shock."),
        new dialog(Ricky, "Little Snake! You are right! Yet, you have the reputation of having the softest scales of all the Valley. We have to find a solution! I know who can help."),
        new dialog(LittleSnake, "Really? Who might that be?"),
        new dialog(Ricky, "Well, the Bear, of course! Ribbit."),
        new dialog(LittleSnake, "But of course! How didn't I think of that before! Let's go meet the Bear!"),
        new dialog(Ricky, "Let's go! I know he lives in the Forest, and She is in a good mood today, so I don't think we will have any problems!"),
    ]),

    new Conv([
        new Background(getBackgroundURL("forest")),
        new dialog(Narrator, "And just like that, our two friends made their way to the magical forest. But as they were strolling along its paths, Ricky the Frog remembered he lacked a crucial information."),
        new dialog(Ricky, "Now let's see... Where does he live, actually?"),
        new dialog(LittleSnake, "Wasn't it in a cave, or sssssomething? Can't we asssssk sssssomeone?"),
        new dialog(Ricky, "It's a good idea! Let's find someone to ask."),
        new ChangeScene(Scene2),
    ]),
]);
//Scene 1 END

//#functions (2)
var currentdialog = 0;
var currentScene = Scene1;
var currentConv = 0;

async function Next() {
    NameboxOn();
    var event = currentScene.conversation[currentConv].events[currentdialog];
    var conversation = currentScene.conversation[currentConv].events;

    if (currentdialog == conversation.length) {
        debugger;
        currentConv++;
        currentdialog = -1;
        showBackground(event)
        Next();
    }

    currentdialog++;

    if (event instanceof dialog) {
        lbname.innerHTML = event.character.name;
        if (event.character.name == "") {
Nameboxoff();
        }
        showSprite(event);
        var currentText = "" 
        nextButton.disabled = true;
        for(var i = 0; i < event.text.length; i++) {
            var currentCharacter = event.text[i];
            event.character.voice.volume = volume/10;
            event.character.voice.play();
            currentText = currentText + currentCharacter;
            lbtext.innerHTML = currentText;
            await new Promise(r => setTimeout(r, 30-textSpeed.value));
            }
            nextButton.disabled = false;
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
    img = event.character.sprite;
    imgSprite.src = img;
}

function getSpriteURL(path) {
    return (new URL("sprites/" + path + ".png", document.location)).href;
}

function getAudioURL(path) {
    return (new URL("sounds/" + path + ".wav", document.location)).href;
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
//#functions (2) END