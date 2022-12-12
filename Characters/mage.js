const Pet = require("./pet");

class Mage {
    constructor(name) {
        this.name = name;
        this.pets = [];
        const pet1 = new Pet('smaller mage');
        this.pets.push(pet1);
    }
}

module.exports = Mage;