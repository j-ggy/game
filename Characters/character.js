const Spells = require("../Spells/spells");

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
            this.mana += 5;

        } else if (this.className === "Hunter") {
            this.attack += 1;
            this.magic += 2;
            this.defense += 2;
            this.health += 10;
            this.mana += 20;

        } else if (this.className === "Sorcerer") {
            this.attack += 3;
            this.magic += 3;
            this.defense += 3;
            this.health += 15;
            this.mana += 15;
        }
    }

    getDamage() {
        var damageDealt = 0;
        var healing = 0;

        // to do: pass in attack or spell. If attack then weapon damage
        // if spell spell damage
        // plus summon

        //redo drain spell


        if (this.activePet) {
            const petDamage = this.activePet.petDmg;
            const magicDamage = this.magic;
            damageDealt = magicDamage + petDamage;
        }         
        if (this.activeSpell && this.mana >= this.activeSpell.manaCost) {

            const spellPower = this.activeSpell.power;
            const powerSign = Math.sign(spellPower);

            if (powerSign === 1) {
                damageDealt += spellPower;
            } else if (powerSign === -1) {
                healing -= spellPower;
            }
            
            this.mana = this.mana - this.activeSpell.manaCost;
            if (this.mana < this.activeSpell.manaCost) {
                activeSpell = null;
            }
        }
        else if (this.activePet === null && this.activeSpell === null) {
            if (this.activeWeapon) {
                damageDealt = this.activeWeapon.damage + this.attack;                
            } else if (!this.activeWeapon) {
                damageDealt=0;
            }
        }
        this.health += healing;
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
