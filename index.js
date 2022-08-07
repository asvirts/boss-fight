let playerHP = 50
let bossHP = 50


function generateRandom(maxLimit = 100) {
    let rand = Math. random() * maxLimit;
    console. log(rand); // say 99.81321410836433.
    rand = Math. floor(rand); // 99.
    return rand;
}