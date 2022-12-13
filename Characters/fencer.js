const Character = require("./character");
const rapier = require("../Weapons/rapier");

class Fencer extends Character {
    constructor(name) {
        super(name, "fencer", 7, 2, 4, 6, 125, 40);
        this.weapons = [];
        this.weapons.push(rapier);
    }
}

module.exports = Fencer;