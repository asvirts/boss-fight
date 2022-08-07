let playerHP = 50
let bossHP = 50
document.getElementById('bossHP').innerHTML
document.getElementById('playerHP').innerHTML


function normalAttack() {
    element = document.getElementById("bossHP");
    let newBossHP = bossHP - 3;
    bossHP = newBossHP;
    element.innerHTML = bossHP;
    alert("3 damage to boss")
}

function powerAttack() {
    element = document.getElementById("bossHP");
    let newBossHP = bossHP - 7;
    bossHP = newBossHP;
    element.innerHTML = bossHP;
    alert("7 damage to boss")
}

function defensiveAttack() {
    element = document.getElementById("bossHP");
    let newBossHP = bossHP - 1;
    bossHP = newBossHP;
    element.innerHTML = bossHP;
    alert("1 damage to boss")
}

