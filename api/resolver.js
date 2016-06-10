// The API that returns the in-email representation.
var spotify = require('../spotify');
var _       = require('underscore');

module.exports = function(req, res) {
  if (!req.query || !req.query.text) {
    res.send(400)
  } else {
    console.log(req.query);
    var track_id = req.query.text.split("(").pop().slice(0, -1);
  }

  var response;

  try {
    spotify.find('track', track_id, function (data) {
      response = data;
    });
  } catch (e) {
    res.status(500).send('Error 003');
    return;
  }

  var track = JSON.parse(response.body);

  // if (res_body.error) {
  //   res.send(500, res_body.error);
  // }

  // if (response.statusCode !== 200 || !response.body) {
  //   res.status(500).send('Error 004');
  //   return;
  // }

  console.log(track)
  res.render('card', {track: track});

  // load template(s), send that as the body in the api response
  // return json with body being the template

  // if (results.length === 0) {
  //   res.json([{
  //     title: '<i>(no results)</i>',
  //     text: ''
  //   }]);
  // } else {
  //   res.render('card', {track: results[0]});
  // }
};