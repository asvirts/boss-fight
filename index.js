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

    alert("Everybody deserves another chance. Good luck, adventurer!")
}


// Normal Attack

function normalAttack() {
    let normAttPlayer = Math.floor(Math.random() * 8) + 1;
    let normAttBoss = Math.floor(Math.random() * 8) + 1;
    
    element = document.getElementById("bossHP");
    let newBossHP = bossHP - normAttBoss;
    bossHP = newBossHP;
    element.innerHTML = bossHP;

    element = document.getElementById("playerHP");
    let newPlayerHP = playerHP - normAttPlayer;
    playerHP = newPlayerHP;
    element.innerHTML = playerHP;

    if (bossHP <= 0) {
        alert("You have defeated Onyxia!")
        alert("Want to try your luck again?")
    }
    
    if (playerHP <= 0) {
        alert("You have been defeated.")
        restartGame()
    }
}


// Power Attack

function powerAttack() {
    let powAttPlayer = Math.floor(Math.random() * 15) + 1;

    let powAttBoss = Math.floor(Math.random() * 15) + 1;
    
    element = document.getElementById("bossHP");
    let newBossHP = bossHP - powAttBoss;
    bossHP = newBossHP;
    element.innerHTML = bossHP;

    element = document.getElementById("playerHP");
    let newPlayerHP = playerHP - powAttPlayer;
    playerHP = newPlayerHP;
    element.innerHTML = playerHP;

    if (bossHP <= 0) {
        alert("You have defeated Onyxia!")
        alert("Want to try your luck again?")
    }
    
    if (playerHP <= 0) {
        alert("You have been defeated.")
        restartGame()
    }
}


// Defensive Attack

function defensiveAttack() {
    let defAttPlayer = Math.floor(Math.random() * 5) + 1;

    let defAttBoss = Math.floor(Math.random() * 5) + 1;
    
    element = document.getElementById("bossHP");
    let newBossHP = bossHP - defAttBoss;
    bossHP = newBossHP;
    element.innerHTML = bossHP;

    element = document.getElementById("playerHP");
    let newPlayerHP = playerHP - defAttPlayer;
    playerHP = newPlayerHP;
    element.innerHTML = playerHP;

 

    if (bossHP <= 0) {
        alert("You have defeated Onyxia!")
        alert("Want to try your luck again?")
    }
    
    if (playerHP <= 0) {
        alert("You have been defeated.")
        restartGame()
    }
}

