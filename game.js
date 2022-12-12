const Warlock = require("./warlock");
const Warrior = require("./warrior");
const Shaman = require("./shaman");
const Paladin = require("./paladin");
const Medic = require("./medic");
const Mage = require("./mage");
const Gambler = require("./gambler");

const warlock = new Warlock('gandalf');
const warrior = new Warrior('garen');
const shaman = new Shaman('jack');
const paladin = new Paladin('godrick');
const medic = new Medic('humper');
const mage = new Mage('anders');
const gambler = new Gambler('zoidberg');

console.log(warlock);
console.log(warlock.pets[0]);
console.log(warrior);
console.log(shaman);
console.log(shaman.pets[0]);
console.log(paladin);
console.log(medic);
console.log(mage);
console.log(gambler);