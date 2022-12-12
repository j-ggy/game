const Fencer = require("./Characters/fencer");
const Zombie = require("./Characters/zombie");
const Mage = require("./Characters/mage");

const fencer = new Fencer('Latrine');
const zombie = new Zombie('Rig');
const mage = new Mage('Muff');

console.log(fencer);
console.log(zombie);
console.log(zombie.pets[0]);
console.log(mage);
console.log(mage.pets[0]);