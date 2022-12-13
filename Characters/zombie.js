const Pet = require("./pet");
const Character = require("./character");
const drain = require("../Spells/drain");
const staff = require("../Weapons/staff");

class Zombie extends Character {
    constructor(name) {
        super(name, "zombie", 4, 4, 6, 3, 150, 90);
        this.pets = [];
        const pet1 = new Pet('ROUS', 5);
        this.pets.push(pet1);
        this.spells.push(drain);
        this.weapons = [];
        this.weapons.push(staff);
    }
    
}

module.exports = Zombie;