const Pet = require("./pet");
const Character = require("./character");
const lightning = require("../Spells/lightning");
const heal = require("../Spells/heal");
const staff = require("../Weapons/staffs/staff");

class Sorcerer extends Character {
    constructor(name) {
        super(name, "Sorcerer", 2, 8, 3, 100, 200);
        this.weapons.push(staff);
        this.spells.push(lightning, heal);
    }
}

module.exports = Sorcerer;