let playerHP = 50
let bossHP = 50
let bossAlive = true
let playerAlive = true

function normalAttack() {
    element = document.getElementById("bossHP");
    let newBossHP = bossHP - 3;
    bossHP = newBossHP;
    element.innerHTML = bossHP;

    element = document.getElementById("playerHP");
    let newPlayerHP = playerHP - 3;
    playerHP = newPlayerHP;
    element.innerHTML = playerHP;

    alert("3 damage to boss and 3 damage to you")
}

function powerAttack() {
    element = document.getElementById("bossHP");
    let newBossHP = bossHP - 7;
    bossHP = newBossHP;
    element.innerHTML = bossHP;

    element = document.getElementById("playerHP");
    let newPlayerHP = playerHP - 7;
    playerHP = newPlayerHP;
    element.innerHTML = playerHP;

    alert("7 damage to boss and 7 damage to you")
}

function defensiveAttack() {
    element = document.getElementById("bossHP");
    let newBossHP = bossHP - 1;
    bossHP = newBossHP;
    element.innerHTML = bossHP;

    element = document.getElementById("playerHP");
    let newPlayerHP = playerHP - 1;
    playerHP = newPlayerHP;
    element.innerHTML = playerHP;

    alert("1 damage to boss and 1 damage to you")
}

