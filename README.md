# game readme

In this game, we create characters, and pit them against each other until one wins.


The fencer will be attack damage only, high speed and health.

The Mage will have access to the lightning bolt and heal spells and start with a smaller mage pet. It will have medium health, high mana and high magic attack.

The Zombie will use the drain spell which heals half of damage dealt. It will start with a rodent of underwhelming size pet. It will be well rounded and slow.

## Game Rules

The character's damage is calculated using thie algorithm:

- if a character has an activePet, we take the activePet's damage as starting value and add it to the character's magic damage.
- if a character is casting a spell, we take the spell's damage and add it to the character's magic damage.
- if a character has neither an activePet, nor a spell, we take their weapon's damage, and add it to the character's attack damage.

## Pet Logic

A character can have an array of pets but can only summomn one active pet.

## Spell Logic

If spell has positive power value, it's damaging. If it has negative power, it's healing.