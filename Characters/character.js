const Spells = require("../Spells/spells");
const config = require("../config");

//main functions for character creation, damage, pets, weapons and spells.

class Character {
    constructor(name, className, attack, magic, defense, health, mana) {
        this.name = name;
        this.className = className;
        this.level = 1;
        this.attack = attack;
        this.magic = magic;
        this.defense = defense;
        this.health = health;
        this.mana = mana;
        this.maxHealth = health;
        this.weapons = [];
        this.pets = [];
        this.spells = [];
        this.activePet = null;
        this.activeSpell = null;
        this.activeWeapon = null;
    }
    levelUp() {
        this.level += 1;
        if (this.className === "Swordperson") { //fix the values 
            this.attack += 2;
            this.magic += 1;
            this.defense += 4;
            this.health += 20;
            this.maxHealth += 20;
            this.mana += 5;
            

        } else if (this.className === "Hunter") {
            this.attack += 1;
            this.magic += 2;
            this.defense += 2;
            this.health += 10;
            this.maxHealth += 10;
            this.mana += 20;

        } else if (this.className === "Sorcerer") {
            this.attack += 2;
            this.magic += 2;
            this.defense += 2;
            this.health += 15;
            this.maxHealth += 15;
            this.mana += 15;
        }
    }

    getDamage() {
        var damageDealt = 0;
        var healing = 0;

        damageDealt += (this.attack + this.activeWeapon.damage);

        if (this.activePet) {
            const petDamage = this.activePet.petDmg;
            damageDealt += petDamage;
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
    cast (spellNo, lvXMob) {
        if (player.mana >= player.spells[spellNo].manaCost) {
            if (Math.sign(player.spells[spellNo].power) = 1) {
                lvXMob.health -= (player.spells[spellNo].power + player.magic)
                player.health -= (lvXMob.damage - player.defense)
            } else if (Math.sign(player.spells[spellNo].power) = -1)
                player.health -= player.spells[spellNo].power;
                player.health -= (lvXMob.damage - player.defense);
        }   
        else {
            console.log("Not enough mana")
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
