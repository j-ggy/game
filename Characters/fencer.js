const Character = require("./character");

class Fencer extends Character {
    constructor(name) {
        super(name, "fencer", 7, 2, 4, 6, 125, 40);
    }
}

module.exports = Fencer;