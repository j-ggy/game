//import general
const prompt = require("prompt-promise");

// import characters
const Swordperson = require("./Characters/swordperson");
const Hunter = require("./Characters/hunter");
const Sorcerer = require("./Characters/sorcerer");

//import mobs
const justSomeDude = require("./Mobs/justSomeDude");
const config = require("./config");
// const x = require("./x");
// const x = require("./x");
// const x = require("./x");


//Character creation
const swordperson = new Swordperson('');
const hunter = new Hunter('');
const sorcerer = new Sorcerer('');

const badGuy= justSomeDude;


//main game loop
function gameLoop() {
    //intro and class selection
    console.log(`Welcome to ${config.gameName}`)
    console.log(`~~story time~~`)
    prompt("Input number to Select Class [1]Hunter, [2]Swordperson, [3]Sorcerer:")
    
};

gameLoop();