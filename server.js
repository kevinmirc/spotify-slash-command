var express = require('express');
var app     = express();
var fs      = require('fs');
var path    = require('path');
var cors    = require('cors');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var corsOptions = {
  origin: /^[^.\s]+\.mixmax\.com$/,
  credentials: true
};

app.get('/typeahead', cors(corsOptions), require('./api/typeahead'));
app.get('/resolver', cors(corsOptions), require('./api/resolver'));

app.get('/logo', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/images/spotify_logo.png'));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});