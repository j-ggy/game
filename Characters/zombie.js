const Pet = require("./pet");

class Zombie {
    constructor(name) {
        this.name = name;
        this.pets = [];
        const pet1 = new Pet('Mortis');
        this.pets.push(pet1);
    }
}

module.exports = Zombie;