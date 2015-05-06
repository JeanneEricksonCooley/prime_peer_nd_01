function ourNum() {
    var randomNum = randomNumber(100, 1000);
    return randomNum;
    console.log("Random number: ", randomNum);
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

module.exports = ourNum;