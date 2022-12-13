const Fencer = require("./Characters/fencer");
const Zombie = require("./Characters/zombie");
const Mage = require("./Characters/mage");


//Character creation
const fencer = new Fencer('Latrine');
const zombie = new Zombie('Rig');
const mage = new Mage('Muff');

//Equiping characters with weapons, spells and summoning pets.
fencer.equipWeapon("rapier");
zombie.summonPet("ROUS");
mage.summonPet("smaller mage");
mage.selectSpell("lightningbolt");
zombie.selectSpell("drain");


//Logging getDamage() function for each character
console.log(mage.name + " does " + mage.getDamage() + " magic damage!");
console.log(mage.activePet.petDmg + " from pet. " + mage.activeSpell.power + " from spell. " + mage.magic + " from base damage.")
console.log(zombie.name + " does " + zombie.getDamage()+ " magic damage!");
console.log(zombie.name + " healed " + (zombie.health - zombie.lastHP));
console.log(fencer.name + " does " + fencer.getDamage() + " physical damage! ..... good job");

//Test for healing functionality
mage.selectSpell("heal");
console.log(mage.health, " hp");
console.log(mage.getDamage());
console.log(mage.health, " hp");