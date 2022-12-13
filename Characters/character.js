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
        this.health = health;
        this.mana = mana;
        this.weapons = [];
        this.pets = [];
        this.spells = [];
        this.activePet = null;
        this.activeSpell = null;
        this.activeWeapon = null;
        this.lastHP = null;
    }
    levelUp() {
        this.level += 1;
        if (this.className === "fencer") {
            this.attack += 2;
            this.magic += 1;
            this.defense += 4;
            this.speed += 3;
            this.health += 20;
            this.mana += 5;

        } else if (this.className === "mage") {
            this.attack += 1;
            this.magic += 2;
            this.defense += 2;
            this.speed += 2;
            this.health += 10;
            this.mana += 20;

        } else if (this.className === "zombie") {
            this.attack += 3;
            this.magic += 3;
            this.defense += 3;
            this.speed += 3;
            this.health += 15;
            this.mana += 15;
        }
    }

    getDamage() {
        var damageDealt = 0;
        if (this.activePet) {
            const petDamage = this.activePet.petDmg;
            const magicDamage = this.magic;
            damageDealt = magicDamage + petDamage;
        }         
        if (this.activeSpell && this.mana > this.activeSpell.manaCost) {
            const spellDamage = this.activeSpell.power;
            damageDealt += spellDamage;
            this.mana = this.mana - this.activeSpell.manaCost;
            if (this.mana < this.activeSpell.manaCost) {
                activeSpell = null;
            }
        if (this.className === "zombie") {
            this.lastHP = this.health;
            this.health += (damageDealt/2);
        }
        }
        else if (this.activePet === null && this.activeSpell === null) {
            if (this.activeWeapon) {
                damageDealt = this.activeWeapon.damage + this.attack;                
            } else if (!this.activeWeapon) {
                damageDealt=0;
            }
        }
        return damageDealt;
    }

    summonPet(petName) {
        for (let i=0; i < this.pets.length; i++) {
            const pet = this.pets[i];
            if(pet.name === petName) {
                this.activePet = pet;
            }
        } 
    }  
    selectSpell(spellName) {
        for (let i=0; i < this.spells.length; i++) {
            const spell = this.spells[i];
            if(spell.name === spellName) {
                this.activeSpell = spell;
            }
        }
    }
    equipWeapon(weaponName) {
        for (let i=0; i < this.weapons.length; i++) {
            const weapon = this.weapons[i];
            if (weapon.name === weaponName) {
                this.activeWeapon = weapon;
            }
        }
    }
}

module.exports = Character;
