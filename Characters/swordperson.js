const Character = require("./character");
const woodSword = require("../Weapons/swords/woodSword");

class Swordperson extends Character {
    constructor(name) {
        super(name, "Swordperson", 7, 1, 2, 125, 40);
        this.weapons.push(woodSword);
    }
}

module.exports = Swordperson;