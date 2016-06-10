var spotify = require('../spotify');
var _       = require('underscore');
var sample_track = require('../sample_track')

module.exports = function(req, res) {
  if (!req.query || !req.query.text) {
    res.send(400)
  } else {
    var track_id = req.query.text.split("(").pop().slice(0, -1);
    console.log("TRACK ID", track_id);
  }

  var response; // use `var results = sample_track` to render track without an api call

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

  console.log(results)

  if (results.error) {
    res.send(500, results.error);
  }

  res.render('card', {track: results})

  // res.json({
  //   body: html
  // });
  // <iframe src="http://localhost??"></iframe> maybe?
};