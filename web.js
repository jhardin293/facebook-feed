var express = require("express");
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

var port = Number(process.env.PORT);
app.listen(port)