// Starting Attributes

let playerHP = 50
let bossHP = 50
let bossAlive = true
let playerAlive = true


// Restart Game

function restartGame() {
    playerHP = 50
    bossHP = 50
    
    element = document.getElementById("bossHP");
    element.innerHTML = bossHP;

    element = document.getElementById("playerHP");
    element.innerHTML = playerHP;

    alert("Good luck, adventurer!")
}


// Normal Attack

function normalAttack() {
    element = document.getElementById("bossHP");
    let newBossHP = bossHP - 3;
    bossHP = newBossHP;
    element.innerHTML = bossHP;

    element = document.getElementById("playerHP");
    let newPlayerHP = playerHP - 4;
    playerHP = newPlayerHP;
    element.innerHTML = playerHP;

    if (bossHP <= 0) {
        alert("You have defeated the boss!")
    }
    
    if (playerHP <= 0) {
        alert("You have been defeated.")
    }
}


// Power Attack

function powerAttack() {
    element = document.getElementById("bossHP");
    let newBossHP = bossHP - 8;
    bossHP = newBossHP;
    element.innerHTML = bossHP;

    element = document.getElementById("playerHP");
    let newPlayerHP = playerHP - 7;
    playerHP = newPlayerHP;
    element.innerHTML = playerHP;

    if (bossHP <= 0) {
        alert("You have defeated the boss!")
    }
    
    if (playerHP <= 0) {
        alert("You have been defeated.")
    }
}

// Defensive Attack

function defensiveAttack() {
    element = document.getElementById("bossHP");
    let newBossHP = bossHP - 1;
    bossHP = newBossHP;
    element.innerHTML = bossHP;

    element = document.getElementById("playerHP");
    let newPlayerHP = playerHP - 2;
    playerHP = newPlayerHP;
    element.innerHTML = playerHP;

    if (bossHP <= 0) {
        alert("You have defeated the boss!")
    }
    
    if (playerHP <= 0) {
        alert("You have been defeated.")
    }
}

