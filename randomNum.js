function ourNum() {
    var randomNum = randomNumber(100, 1000);
    console.log("Random number: ", randomNum);
    return randomNum;

}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

module.exports = ourNum;