var express = require('express');
var timesqrt = require('./timesqrt');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/simple', function(req, res) {
  res.send('Just another endpoint.');
});

app.get('/timesqrt', function(req, res) {
   res.send(String(timesqrt())); 
});

console.log("Server is listening on port 3000");
app.listen(3000);