const Pet = require("./pet");
const Character = require("./character");
const lightningbolt = require("../Spells/lightningbolt");
const heal = require("../Spells/heal");
const dagger = require("../Weapons/dagger");

class Mage extends Character {
    constructor(name) {
        super(name, "mage", 2, 8, 3, 4, 100, 200);
        this.pets = [];
        const pet1 = new Pet('smaller mage', 2);
        this.pets.push(pet1);
        this.spells.push(heal);
        this.spells.push(lightningbolt);
        this.weapons = [];
        this.weapons.push(dagger);
    }
}

module.exports = Mage;