
var express = require('express');
var app = express();

var accountBal = require("./accountBal");

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
   response.send(accountBal.balance() + accountBal.money());
});

app.listen(app.get('port'), function() {
   console.log("Node app running on port: ", app.get('port'));
});


//var express = require('express');
//var app = express();
//
//var randomNum = require("./randomNum");
//
//app.set('port', (process.env.PORT || 5000));
//
//app.get('/', function(request, response) {
//    response.send(randomNum());
//});
//
//app.listen(app.get('port'), function() {
//    console.log("Node app running on port: ", app.get('port'));
//});