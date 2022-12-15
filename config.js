const config =  {
    hunterClassName: "Hunter",
    sorcererClassName: "Sorcerer",
    swordpersonClassName: "Swordperson",
    classChoice: null,
    gameName: "GAMENAME",
    badEntryText: "I'm sorry, that was not a valid entry.",
    validChoice: null,
    charName: ""
}

function choiceReset() {
    config.validChoice = null;
}

module.exports = config;