const Warlock = require("./warlock");
const Warrior = require("./warrior");
const Shaman = require("./shaman");

const warlock = new Warlock('gandalf');
const warrior = new Warrior('garen');
const shaman = new Shaman('jack');

console.log(warlock);
console.log(warlock.pets[0]);
console.log(warrior);
console.log(shaman);
console.log(shaman.pets[0]);