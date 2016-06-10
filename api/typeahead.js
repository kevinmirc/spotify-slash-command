var spotify = require('../spotify');
var _       = require('underscore');

module.exports = function(req, res) {
  var term = req.query.text.trim();
  if (!term) {
    res.json([{
      title: '<i>(search a song on spotify)</i>',
      text: ''
    }]);
    return;
  }

  var response;

  try {
    spotify.searchSync('track', term, function (data) {
      response = data;
    });
  } catch (e) {
    res.status(500).send('Error 001');
    return;
  }

  if (response.statusCode !== 200 || !response.body) {
    res.status(500).send('Error 002');
    return;
  }

  var results = _.chain(JSON.parse(response.body).tracks.items)
      .map(function (item) {
        return {
          id: item.id,
          name: item.name, 
          text: `artist(s): ${item.artists.map((a)=>a.name).join(", ")} (${item.id})`
        }
      }).value()

  if (results.length === 0) {
    res.json([{
      title: '<i>(no results)</i>',
      text: ''
    }]);
  } else {
    res.json(results);
  }
};