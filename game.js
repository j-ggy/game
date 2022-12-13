const Fencer = require("./Characters/fencer");
const Zombie = require("./Characters/zombie");
const Mage = require("./Characters/mage");

const fencer = new Fencer('Latrine');
const zombie = new Zombie('Rig');
const mage = new Mage('Muff');

// console.log(fencer);
// console.log(zombie);
// console.log(mage);

fencer.equipWeapon("rapier");
zombie.summonPet("ROUS");
mage.summonPet("smaller mage");
mage.selectSpell("lightningbolt");
zombie.selectSpell("drain");

console.log(mage.name + " does " + mage.getDamage() + " magic damage!");
console.log(mage.activePet.petDmg + " from pet. " + mage.activeSpell.power + " from spell. " + mage.magic + " from base damage.")
console.log(zombie.name + " does " + zombie.getDamage()+ " magic damage!");
console.log(zombie.name + " healed " + (zombie.health - zombie.lastHP));
console.log(fencer.name + " does " + fencer.getDamage() + " physical damage! ..... good job");

console.log("~ Heal test ~");
mage.selectSpell("heal");
console.log(mage.health, " hp");
console.log(mage.getDamage());
console.log(mage.health, " hp");