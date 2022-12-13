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

console.log(mage);
// console.log(zombie.getDamage());
// console.log(fencer.getDamage());

for (let i=0; i < 25; i++) {
    console.log(mage.getDamage());
    console.log(mage.mana);
}
