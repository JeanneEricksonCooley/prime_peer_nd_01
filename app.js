var express = require('express');
var app = express();

var randomNum = require('./randomNum');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
   response.sendStatus(randomNum());
});

app.listen(app.get('port'), function() {
   console.log("Node app running on port: ", app.get('port'));
});