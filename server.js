var express = require('express');
var app     = express();
var fs      = require('fs');
var path    = require('path');
var cors    = require('cors');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/typeahead', cors(), require('./api/typeahead'));
app.get('/resolver', cors(), require('./api/resolver'));

app.get('/logo', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/images/spotify_logo.png'));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});