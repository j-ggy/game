const Pet = require("./pet");
const Character = require("./character");
const bow = require("../Weapons/bows/bow");

class Hunter extends Character {
    constructor(name) {
        super(name, "Hunter", 4, 2, 3, 150, 100);
        this.weapons.push(bow);
    }
    
}

module.exports = Hunter; 