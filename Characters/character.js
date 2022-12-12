const Spells = require("../Spells/spells");

class Character {
    constructor(name, className, attack, magic, defense, speed, health, mana) {
        this.name = name;
        this.className = className;
        this.level = 1;
        this.attack = attack;
        this.magic = magic;
        this.defense = defense;
        this.speed = speed;
        this. health = health;
        this.mana = mana;
        this.weapons = [];
        this.pets = [];
        this.spells = [];
    }
    levelUp() {
        this.level += 1;
    }
}

module.exports = Character;
