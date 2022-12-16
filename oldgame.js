//import general
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


//main game loop
async function gameLoop() {

    //intro and class selection
    console.log(`Welcome to ${config.gameName}`)
    console.log(`~~insert intro~~`)
    while (true) {
        config.classChoice = await prompt("Input number to Select Class [1]Hunter, [2]Swordperson, [3]Sorcerer:")
        if (config.classChoice == 1) {
            config.classChoice = config.hunterClassName;
            console.log(`You have picked ${config.classChoice}.`); 
            break;
        } else if (config.classChoice == 2) {
            config.classChoice = config.swordpersonClassName;
            console.log(`You have picked ${config.classChoice}.`);
            break;
        }
        else if (config.classChoice == 3) {
            config.classChoice = config.sorcererClassName;
            console.log(`You have picked ${config.classChoice}.`); 
            break;
        } else {
            console.log(config.classChoice + " is not a correct input.")
        }
    }
    
    // Get a name for the character
    while (true) {
        config.charName = String(await prompt("Please enter a character name: "));
        if (config.charName.length <= 15 && config.charName.length >= 1) {
            console.log(`Greetings ${config.charName}!`)            
            break;
        } else {
            console.log("Please input a name between 1 and 15 characters.")
        }
    }
    
    //Character creation
    let player;
    if (config.classChoice == config.hunterClassName) {
        player = new Hunter(config.charName);  
        console.log(player);
    } else if (config.classChoice == config.swordpersonClassName) {
        player = new Swordperson(config.charName);
        console.log(player);
    } else if (config.classChoice == config.sorcererClassName) {
        player = new Sorcerer(config.charName);  
        console.log(player);
    }
    
    //first action 
    config.validChoice=false;
    while (true) {
        console.log("What would you like to do?")
        config.action = Number(await prompt("[1]:Check around the village [2]:Seek a Battle [3]:Equip a weapon"));
        //random event
        if (config.action == 1) { 
            config.rng = Math.random();
            if (config.rng >= 0.5) {
                console.log("You stepped in something!")
                
            } else if (config.rng < 0.5) {
                console.log("You found nothing!")
            }
        } 
        //continues to next part in story
        else if (config.action == 2) {
            break; 
        } 
        // equip weapon(s)
        else if (config.action == 3) {
            for (let i=0; i <player.weapons.length; i++) {
                console.log(`${i}: ${player.weapons[i].name}`);
            }
            while (true) {
                const activeWeapon = await prompt(`Select a weapon:`)
                if (activeWeapon <= player.weapons.length) {
                    player.activeWeapon = player.weapons[activeWeapon];
                    break;
                } else {
                    console.log(config.badEntryText);
                }
            }
            console.log(player.activeWeapon.name + " equipped!");

        // Spell equiping    
        } 
    //     else if (config.action == 4) {
    //         if (player.className == config.swordpersonClassName || player.className == config.hunterClassName) {
    //             console.log(`A ${player.className} can't equip spells!`)
    //         } else {     
    //             console.log("Your Spells:")      
    //             for (let i=0; i<player.spells.length; i++) {                    
    //                 console.log(`[${i}]:${player.spells[i].name}`)                   
    //         }
    //         while (true) {
    //             const selectedSpell = await prompt(`Select a spell: `); 
    //             if (selectedSpell <= player.spells.length) {
    //             player.activeSpell = player.spells[selectedSpell];
    //             player.selectSpell();
    //             }
    //         }
    //     }
    // }
    }
    config.rng = 0;


    console.log(`You feel ready to take on whatever is in your way.`);
    console.log(`Hastily, you head towards the village gate to begin your journey`);
    if (player.activeWeapon == null) {
        console.log(`A voice calls out from behind "Don't forget to equip your weapons!"`);
        
        for (let i=0; i <player.weapons.length; i++) {
        console.log(`${i}: ${player.weapons[i].name}`);
        }

        while (true) {
            const activeWeapon = await prompt(`Select a weapon:`)
            if (activeWeapon <= player.weapons.length) {
                player.activeWeapon = player.weapons[activeWeapon];
                break;
            } else {
                console.log(badEntryText);
            }
        }
        console.log(player.activeWeapon.name + " equipped!");
    }
    console.log("You approach the village gate with little trepidation.");
    console.log("Charging through, you fail to notice yourself break the locking mecehanism.");
    console.log("You see a figure ahead.\n Clearly one of Tarantulatar's minions.");
    
                                //battle #1
    config.rng = Math.random();
    let lv1Mob;
    while (true) {
        if (config.rng > 0.5) {
        lv1Mob = rabbit;
        console.log(`You begin to fight a ${rabbit.name}`)
        } else if (config.rng <= 0.5  && config.rng > 0.05) {
        lv1Mob = justSomeDude;
        console.log(`You begin to fight a ${justSomeDude.name}`)
        } else if (config.rng <= 0.05) {
        console.log("The creature runs off in fear of your presence!")
        break;
        }
        while (player.health > 0 && lv1Mob.health > 0) {
        while (true) {
            config.action = await prompt("[1]: Attack, [2]:Spell, [3]:Summon")
            if (config.action == 1 || config.action == 2 || config.action == 3) {
                console.log(config.action);
                break;
            }
        }
        if (config.action ==1) {
            lv1Mob.health -= player.getDamage() - lv1Mob.defense
            player.health -= lv1Mob.damage  - player.defense
            console.log(player.health, lv1Mob.health);
            continue;
        } else if (config.action == 2 && player.className == config.sorcererClassName) {
            while (true) {
                for (let i=0; i<=player.spells.length; i++) {
                    console.log(`[${i}]:${player.spells[i]}`)
                }
                config.action = await prompt(`Select spell.`)
                if (config.action <= player.spells.length) {
                    console.log(cast(config.action, lv1Mob));
                    continue;
                }
            }
        } else if (config.action == 3) {
            //summon pet
            continue;
        }
        }
        if (player.health <= 0) {
        console.log("You lost!");
        throw Error("Lose");
        } else if (lv1Mob.health <= 0) {
        console.log("Congrats on beating a " + lv1Mob.name);
        player.levelUp();
        break;
        }
    }

    while (true) {
        config.action = await prompt("[1]:Continue, or [2]:Rest");
        if (config.action == 1) {
            break;
        } else if (config.action == 2)  {
            let heal = player.maxHealth - player.health;
            player.health += heal;
            console.log(`You feel rested at ${player.health} HP.`)
        }
    }
    console.log("Filled with confidence, you rush down the path towards the monster's den")


}

gameLoop();