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
var b1
var b2
var b3
var b4
var choicebuttons
var inventory

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

class ChangeConv {
    constructor(conv) {
        this.conv = conv
    }
}

class Choice {
    constructor(action, text) {
        this.action = action;
        this.text = text;
    }
}

class ChoiceArray {
    constructor(choices) {
        this.choices = choices;
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
    b1 = document.getElementById("b1");
    b2 = document.getElementById("b2");
    b3 = document.getElementById("b3");
    b4 = document.getElementById("b4");
    choicebuttons = [b1, b2, b3, b4];
    startScreen.style.display = "block";
    gameScreen.style.display = "none";
    choiceBox.style.display = "none";
    nextBox.style.display = "block";
}

function startGame() {
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
    volume = document.getElementById('volume').value;
    inventory = [];
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
var Gomez = new character("Gomez the Gorilla", getSpriteURL("Gomez"), new Audio(getAudioURL("Gomez")));
var Timmy = new character("Timmy the Turtle", getSpriteURL("Timmy"), new Audio(getAudioURL("Timmy")));
var BigBear = new character("Big Bear", getSpriteURL("Bear"), new Audio(getAudioURL("Bear")));
//#characters END

// Choices Cave//
//Scene Cave//
var SceneCave = new Scene([
    new Conv([
        new Background(getBackgroundURL("bearcave")),
        new dialog(Narrator, "Little Snake and Ricky the Frog decided to turn left, following Gomez's instructions. They slithered and jumped along a quaint little forest path for quite a long time, before finally finding themselves in front of a large stone cave."),
        
    ]),
]);
//Scene Cave END//

// Choices Shop//
//Scene Shop//
var SceneShop = new Scene([
    new Conv([
        new Background(getBackgroundURL("shop")),
        new dialog(Narrator, "After some careful deliberation, Little Snake and Ricky the Frog decided to turn right. After some time walking in the forest, they arrived at a clearing full with small stands. It looked like a little market! But, curiously enough, only one person seemed to take care of all the stands."),
        
    ]),

]);
//Scene Shop END//

//Choices Forest//
var bearwho = new Choice(function(){changeConv(2)}, "Who is the Bear, actually?");
var bearlotion = new Choice(function(){changeConv(3)}, "What can the Bear do for my softness problem?");
var bearwhere = new Choice(function(){changeConv(4)}, "Where can we find the Bear?");
var thanks = new Choice(function(){changeConv(5)}, "I can't think of anything elssssse...");
var repeatgomez = new Choice(function(){changeConv(1)}, "Actually, can you repeat sssomething for me?");
var walkpath = new Choice(function(){changeConv(6)}, "I think we'll get going! Bye!");
var backgomez = new Choice(function(){changeConv(7)}, "Let's look for Gomez again.");
var leftcave = new Choice(function(){changeScene(SceneCave)}, "Let's turn left!");
var rightshop = new Choice(function(){changeScene(SceneShop)}, "Let's turn right!");

//Scene Forest
var SceneForest = new Scene([

    new Conv([
        new Background(getBackgroundURL("forest")),
        new dialog(Narrator, "And just like that, our two friends made their way to the magical forest. But as they were strolling along its paths, Ricky the Frog remembered he lacked a crucial information."),
        new dialog(Ricky, "Now let's see... Where does he live, actually?"),
        new dialog(LittleSnake, "Wasn't it in a cave, or sssssomething? Can't we asssssk sssssomeone?"),
        new dialog(Ricky, "It's a good idea! Let's find someone to ask."),
        new dialog(LittleSnake, "But I don't sssseee anyone..."),
        new dialog(Ricky, "Have you tried looking up? Ribbit."),
        new dialog(LittleSnake, "Oh! Hi!"),
        new dialog(Gomez, "Hi Ricky, hi Little Snake."),
        new dialog(Gomez, "....."),
        new dialog(Gomez, "......."),
        new dialog(LittleSnake, ".........."),
        new dialog(Ricky, "............?"),
        new dialog(Gomez, "................"),
        new dialog(Gomez, "..................... Little Snake, you seem a little bit off, somehow?"),
        new dialog(LittleSnake, "Gomez, you noticed! Yesssss, I don't have any ointment left for my ssssoft ssssscales... and that is why we are looking for the Bear."),
        new dialog(Gomez, "Ah, Big Bear? In this case, I might be able to help you."),
        new dialog(Ricky, "Atta boy! Little Snake, Gomez knows everything that's going on in the forest. You should ask as many questions as you can before he climbs back into his tree!"),
        new dialog(LittleSnake, "But, aren't gorillas supposed to live on the ground?"),
        new dialog(Gomez, "That Magical Forest sure is Magic, Little Snake."),
        new dialog(Ricky, "Don't question the ways of the Magical Forest, Little Snake."),
        new dialog(Narrator, "Suddenly, a cold breeze made its way through the trees, making the Magical Forest eerily whistle. Shivers went down Little Snake's spine."),
        new dialog(LittleSnake, "...!"),
        new dialog(LittleSnake, "I... I'm sorry. I won't do it again."),
    ]),

    new Conv([
        new dialog(Gomez, "Ask me everything you want about Big Bear!"),
        new ChoiceArray([bearwho, bearlotion, bearwhere, thanks]),
    ]),

    //Who is Big Bear?//
    new Conv([
        new dialog(Gomez, "You know, I think that Big Bear has been in the forest for as long as I can remember. We don't exactly know who he is, but he helps us out always."),
        new dialog(LittleSnake, "Does sssssomeone help him?"),
        new dialog(Ricky, "What do you mean? Ribbit."),
        new dialog(LittleSnake, "Well, even people who help need ssssomeone to help them, don't they?"),
        new dialog(Gomez, ".........."),
        new dialog(Ricky, "................"),
        new dialog(LittleSnake, "...................?"),
        new dialog(Gomez, "........................ Little Snake, you are very wise."),
        new dialog(Gomez, "No, I don't think anyone helps Big Bear. When was the last time he came out?..."),
        new ChangeConv(1),
    ]),

    //Why can Big Bear help with my lotion?//
    new Conv([
        new dialog(Ricky, "The Bear helps with anything, Little Snake. Besides, he's a close second to you when it comes to softness. There is no way he doesn't use furcare."),
        new dialog(LittleSnake, "But I use sssscalecare, not furcare."),
        new dialog(Gomez, ".........."),
        new dialog(Ricky, "................"),
        new dialog(LittleSnake, "...................?"),
        new dialog(Ricky, "Ribbit."),
        new dialog(Ricky, "No offense, Little Snake, but you will have to accept that your scales are a bit too fur-like to be actual scales."),
        new dialog(Gomez, "Little Snake has scales?"),
        new dialog(LittleSnake, "I can't believe it. I have SSSSCALES!!"),
        new dialog(Narrator, "Ricky the Frog and Gomez the Gorilla then exchanged a meaningful stare. If Little Snake wants to have scales, let her believe she has scales. It doesn't hurt anyone."),
        new dialog(LittleSnake, "Anyway..."),
        new ChangeConv(1),
    ]),

    //Where can I find Big Bear?//
    new Conv([
        new dialog(Gomez, "If you want to head to Big Bear's cave, you have to keep going on that path, and then... Little Snake."),
        new dialog(Narrator, "Little Snake was staring at a pretty, bright-yellow butterfly."),
        new dialog(Ricky, "Little Snake, listen well. You should take notes. Ribbit."),
        new dialog(LittleSnake, "Ssssorry. I'm lissstening."),
        new dialog(Gomez, ".........."),
        new dialog(Ricky, "................"),
        new dialog(LittleSnake, "...................?"),
        new dialog(Gomez, "You have to keep going on that path, and then you turn LEFT."),
        new dialog(LittleSnake, "What happensss if I don't turn left?"),
        new dialog(Gomez, "You will make Timmy very grumpy."), 
        new dialog(Ricky, "Oh no, not Timmy. Ribbit. Little Snake, let's go LEFT."),
        new dialog(LittleSnake, "Wait, why would turning right make Timmy grumpy? Who's Timmy?"),
        new dialog(Ricky, "Little Snake, you ask too many questions."),
        new dialog(Gomez, "Timmy doesn't like people entering his shop without buying anything, you know that."),
        new dialog(Ricky, "What does Timmy like?"),
        new dialog(Gomez, "Good question."),
        new ChangeConv(1),
    ]),

    //Thank you Gomez!//
    new Conv([
        new dialog(LittleSnake, "Thankssss Gomez, that was very good information."),
        new dialog(Gomez, "No problems Little Snake! I'm always happy to help."),
        new dialog(Ricky, "We should head to our next destination, Little Snake! To the Bear's cave!"),
        new dialog(Gomez, "Don't hesitate to come back here if you need me to repeat anything!"),
        new dialog(LittleSnake, "Thank you, Gomez!"),
        new ChoiceArray([repeatgomez, walkpath]),

    ]),

    //forking paths//
    new Conv([
        new dialog(Narrator, "Feeling more in control of the situation thanks to the precious information that Gomez had given to them, Little Snake and Ricky went on their way like the gorilla had said, walking on the same path they came from."),
        new dialog(Narrator, "Soon, the path forked. It was exactly as Gomez had said!"),
        new dialog(LittleSnake, "Ricky! Should we go left or right?"),
        new dialog(Ricky, "Little Snake, I have very bad memory. I'm leaving that choice up to you. Ribbit."),
        new dialog(LittleSnake, "Where should we go..."),
        new ChoiceArray([backgomez, rightshop, leftcave]),
    ]),

    new Conv([
        new dialog(Gomez, "You're back! What can I help you with?"),
        new ChoiceArray([bearwho, bearwhere, bearlotion, walkpath]),
    ]),


]);
//Scene Forest END


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
        new ChangeScene(SceneForest),
    ]),

]);
//Scene 1 END

//#functions (2)
var currentdialog = 0;
var currentScene = Scene1;
var currentConv = 0;

async function Next() {
    var event = currentScene.conversation[currentConv].events[currentdialog];
    var conversation = currentScene.conversation[currentConv].events;

    if (currentdialog == conversation.length) {
        currentConv++;
        currentdialog = -1;
        showBackground(event)
        Next();
    }

    currentdialog++;
    if (event instanceof ChoiceArray) {
        choiceBox.style.display = "block";
        nextBox.style.display = "none";

        for (var i = 0; i < event.choices.length; i++) {
            var currentChoice = event.choices[i];
            var currentButton = choicebuttons[i];
            currentButton.innerHTML = currentChoice.text;
            currentButton.onclick = currentChoice.action; 
            currentButton.style.display = "block";
        } 
    }

    if (event instanceof dialog) {
        choiceBox.style.display = "none";
        nextBox.style.display = "block";
        //buttons display
        b1.innerHTML = "";
        b2.innerHTML = "";
        b3.innerHTML = "";
        b4.innerHTML = "";
        b1.style.display = "none";
        b2.style.display = "none";
        b3.style.display = "none";
        b4.style.display = "none";
        //buttons display
        lbname.innerHTML = event.character.name;
        if (event.character.name == "") {
            Nameboxoff();
        }
        else {
            NameboxOn();
        }
        showSprite(event);
        var currentText = ""
        nextButton.disabled = true;
        for (var i = 0; i < event.text.length; i++) {
            var currentCharacter = event.text[i];
            event.character.voice.volume = volume / 10;
            event.character.voice.play();
            currentText = currentText + currentCharacter;
            lbtext.innerHTML = currentText;
            await new Promise(r => setTimeout(r, 30 - textSpeed.value));
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

    if (event instanceof ChangeConv) {
        changeConv(event.conv)
    }
}

function addToInventory(text) {
    inventory.push(text);
}

function checkInventory(text) {
    return inventory.includes(text);
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
    Next();
}
//#functions (2) END