var convert = require('./convertUSD');

function showMoney() {
    return convert();
}

function balance() {
    return "Account balance:\n";
}



module.exports.money = showMoney;
module.exports.balance = balance;