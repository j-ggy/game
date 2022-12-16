const prompt = require("prompt-promise");
const config = require("./config");

// import characters
const Hunter = require("./Characters/hunter");
const Swordperson = require("./Characters/swordperson");
const Sorcerer = require("./Characters/sorcerer");

//import mobs
const justSomeDude = require("./Mobs/justSomeDude");
const rabbit = require("./Mobs/rabbit");
const panda = require("./Mobs/rabidPanda");
const boulder = require("./Mobs/suspiciousBoulder");
const spider = require("./Mobs/tarantula");

// alright that didn't work
// lets actually use some functions this time

async function actionPrompt(displayText, acceptedInput) {
    while(true) {
        config.action = Number(await prompt(displayText + " "));
        if (acceptedInput.includes(config.action)) {
            break;
        } else {
            console.log(config.invalidEntry);
        }
    }
}
async function getName() {
    while (true) {
        config.charName = String(await prompt("Please enter a character name: "));
        if (config.charName.length <= 15 && config.charName.length >= 1) {         
            break;
        } else {
            console.log("Please input a name between 1 and 15 characters.")
        }
    }
}
function createCharacter(name, classNo) {
    if (classNo == 1) {
        player = new Hunter(name);
        config.classChoice = config.hunterClassName;
        return player;
    } else if (classNo == 2) {
        player = new Swordperson(name);
        config.classChoice = config.swordpersonClassName;
        return player;
    } else if (classNo == 3) {
        player = new Sorcerer(name);
        config.classChoice = config.sorcererClassName;
        return player;
    } 
}

function summonMob(level) {
    config.rng = Math.random();
    if (level == 1) {        
        if (config.rng >= 0.5) {
            config.activeMob = rabbit;
        } else if (config.rng < 0.5) {
            config.activeMob = justSomeDude;
        }
    } else if (level == 2) {
        if (config.rng >= 0.5) {
            config.activeMob = panda;
        } else if (config.rng < 0.5) {
            config.activeMob = boulder;
        }
    } else if (level == 3) {
        config.activeMob = spider;
    }
}

async function villageLoop() {
    while (true) {
        await actionPrompt("[1]:Check around the village [2]:Seek a Battle [3]:Equip a weapon [4]: Equip a Spell", [1,2,3,4]);
        
        if (config.action == 1) {           //RNG for checking around village
            config.rng = Math.random();
            if (config.rng >= 0.5) {
                console.log("You stepped in poop. -2HP")
                player.health -= 2;
            } else if (config.rng < 0.5) {
                console.log("You found nothing.")
            }
        } else if (config.action == 2) {    //head directly to battle, must use this option to exit loop
            if (player.activeWeapon == null) {
                console.log("You should probably equip a weapon before battle!");
            }   else {
                break;
            }                        
        } else if (config.action == 3) {
            await player.equipWeapon();     //equip weapon
            console.log(`You equipped a ${player.activeWeapon.name}`)
        } else if (config.action == 4) {
            await player.equipSpell();      //equip spell
        }
    }
}

async function fight() {
    while (player.health > 0 && config.activeMob.health > 0) {
        await actionPrompt("[1]:Fight, [2]:Spell, [3]:Summon, [4]:Potion", [1,2,3,4]);

        if (config.action == 1) {
            player.getDamage();

            console.log(`Your health: ${player.health}. Enemy Health: ${config.activeMob.health}`);
        } else if (config.action == 2) {
            if (player.classChoice != player.sorcererClassName) {
                console.log("You can't cast spells!")
                continue;
            } else {
                await actionPrompt(`[1]:Use Spell, [2]:Switch spell: `, [1,2]);
                if (config.action == 1) {
                    if(player.activeSpell) {
                        if (player.mana >= player.activeSpell.manaCost) {
                            config.activeMob.health = (config.activeMob.health - player.getSpellDamage());
                            player.health -= (config.activeMob.damage - player.defense);
                            console.log(`Your health: ${player.health}. Enemy Health: ${config.activeMob.health}`);
                        } else {
                            console.log("Not enough mana")
                        }
                    } else {
                        console.log("No active spell set");
                    }

                } else if (config.action == 2) {
                    await player.equipSpell();
            }
            }
            
        } else if (config.action == 3) {
            await player.summonPet();
            console.log(`You summoned a ${player.activePet.name}!`)
        } else if (config.action == 4) {
            player.usePotion();
            console.log(`You have ${player.potions} potions left`)
        }
    } if (player.health <= 0) {
        console.log("You lose");
        throw Error("Game Over");
    } else if (config.activeMob.health <= 0) {
        console.log(`Nice work! You beat a ${config.activeMob.name}`)
        config.mobLv += 1;
        summonMob();
        player.levelUp();
        player.health = player.maxHealth;
    }
}
async function gameLoop() {
    console.log(`Welcome to ${config.gameName}`)

    //Character creation and class picker
    await getName();
    await actionPrompt("Please select your class:\n[1]: Hunter, [2]:Swordperson, [3]:Sorcerer.", [1,2,3]); 
    let player;
    player = createCharacter(config.charName, config.action);
    console.log(`\nGreetings ${config.charName} the ${config.classChoice}!`) 

    console.log(`You feel ready to take on whatever is in your way.`);

    //Time to equip spell, weapons, or take a look around the village
    console.log("What would you like to do?")
    await villageLoop();

    console.log(`Hastily, you head towards the village gate to begin your journey`);
    console.log("Charging through, you fail to notice yourself break the locking mecehanism.");
    console.log("You see a figure ahead.\n Clearly one of Tarantulatar's minions.");
    
  
    summonMob(1);
    console.log(`your next enemy is ${config.activeMob.name}`)
    await fight();

    console.log("Filled with confidence, you rush down the path towards the monster's den")
    summonMob(2);
    console.log(`your next enemy is ${config.activeMob.name}`)
    await fight();

    console.log("Delving deeper into ")
    summonMob(3);
    console.log(`your next enemy is ${config.activeMob.name}`)
    await fight();


    if (player.health > 0 && config.activeMob.health <= 0) {
        console.log(`Congrats, ${player.name}, you killed one of the Spider Queen's recent babies. You have little time befo---\n You Have Died.`)
    } else {
        console.log("how'd you get here?")
    }
}

gameLoop();