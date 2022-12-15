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

const hunter = new Hunter('');
const sorcerer = new Sorcerer('');

const badGuy= justSomeDude;

//main game loop
async function gameLoop() {

    //intro and class selection
    console.log(`Welcome to ${config.gameName}`)
    console.log(`~~story time~~`)
    while (!config.validChoice) {
        config.classChoice = await prompt("Input number to Select Class [1]Hunter, [2]Swordperson, [3]Sorcerer:")
        if (config.classChoice == 1) {
            config.classChoice = config.hunterClassName;
            console.log(`You have picked ${config.classChoice}.`); //TOADD: YOU HAVE X ATTACK X DEFENSE ETC.
            config.validChoice = true;
        } else if (config.classChoice == 2) {
            config.classChoice = config.swordpersonClassName;
            console.log(`You have picked ${config.classChoice}.`);
            config.validChoice = true;
        }
        else if (config.classChoice == 3) {
            config.classChoice = config.sorcererClassName;
            console.log(`You have picked ${config.classChoice}.`); 
            config.validChoice = true;
        } else {
            console.log(config.classChoice + " is not a correct input.")
    }
    }
    
    // Get a name for the character
    config.validChoice=false;
    while (!config.validChoice) {
        config.charName = String(await prompt("Please enter a character name: "));
        if (config.charName.length <= 15 && config.charName.length >= 1) {
            console.log(`Greetings ${config.charName}!`)            
            config.validChoice = true;
        } else {
            console.log("Please input a name between 1 and 15 characters.")
        }
    }
    config.validChoice=false;

    //Character creation
    if (config.classChoice = config.hunterClassName) {
        const hunter = new Hunter(config.charName);  
        console.log(hunter);
    } else if (config.classChoice = config.swordpersonClassName) {
        const swordperson = new Swordperson(config.charName);
        console.log(swordperson);
    } else if (config.classChoice = config.sorcererClassName) {
        const sorcerer = new Sorcerer(config.charName);  
        console.log(sorcerer);
    }

}

gameLoop();