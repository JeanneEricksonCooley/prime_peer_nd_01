var convert = require('./convertUSD');
var randomNum = require('./randomNum');

function showMoney() {
    return convert(randomNum());
}

function balance() {
    return "Account balance:\n";
}



module.exports.money = showMoney;
module.exports.balance = balance;