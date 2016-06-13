var spotify       = require('../spotify');
var fs            = require('fs');
var _             = require('underscore');
var sample_track  = require('../fixtures/sample_track')
var ejs           = require('ejs');

module.exports = function(req, res) {
  if (!req.query || !req.query.text) {
    res.send(400)
  } else {
    var track_id = req.query.text.split("(").pop().slice(0, -1);
  }

  var response;
  // use `var results = sample_track` to render track without an api call

  try {
    spotify.find('tracks', track_id, function (data) {
      response = data;
    });
  } catch (e) {
    res.status(500).send('Error 003');
    return;
  }

  if (response.statusCode !== 200 || !response.body) {
    res.status(500).send('Error 004');
    return;
  }

  var results = _.chain(JSON.parse(response.body)).value();

  if (results.error) {
    res.send(500, results.error);
  }

  var compiled = ejs.compile(fs.readFileSync(__dirname + '/../views/card.ejs', 'utf8'));
  var html = compiled({ track: results }).replace(/(\r\n|\n|\r)/gm,"");

  res.json({ body: html });
};