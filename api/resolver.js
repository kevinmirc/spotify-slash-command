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

  // I'm doing this wrong apparently
  var track = JSON.parse(response.body);

  // if (res_body.error) {
  //   res.send(500, res_body.error);
  // }




  // var track = {
  //               "album" : {
  //                 "album_type" : "album",
  //                 "available_markets" : [ "AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID" ],
  //                 "external_urls" : {
  //                   "spotify" : "https://open.spotify.com/album/4lGNpgFI67TUq5BMfnPe3Z"
  //                 },
  //                 "href" : "https://api.spotify.com/v1/albums/4lGNpgFI67TUq5BMfnPe3Z",
  //                 "id" : "4lGNpgFI67TUq5BMfnPe3Z",
  //                 "images" : [ {
  //                   "height" : 640,
  //                   "url" : "https://i.scdn.co/image/560d98dc0d7d08f319265e5e603e54b80e950903",
  //                   "width" : 640
  //                 }, {
  //                   "height" : 300,
  //                   "url" : "https://i.scdn.co/image/40caaaa2b875f451c9405b7487e5ba00ebd008aa",
  //                   "width" : 300
  //                 }, {
  //                   "height" : 64,
  //                   "url" : "https://i.scdn.co/image/74804f5b38126467c6527c84ac931e47139f3d1f",
  //                   "width" : 64
  //                 } ],
  //                 "name" : "Seven + Mary",
  //                 "type" : "album",
  //                 "uri" : "spotify:album:4lGNpgFI67TUq5BMfnPe3Z"
  //               },
  //               "artists" : [ {
  //                 "external_urls" : {
  //                   "spotify" : "https://open.spotify.com/artist/4hz8tIajF2INpgM0qzPJz2"
  //                 },
  //                 "href" : "https://api.spotify.com/v1/artists/4hz8tIajF2INpgM0qzPJz2",
  //                 "id" : "4hz8tIajF2INpgM0qzPJz2",
  //                 "name" : "Rainbow Kitten Surprise",
  //                 "type" : "artist",
  //                 "uri" : "spotify:artist:4hz8tIajF2INpgM0qzPJz2"
  //               } ],
  //               "available_markets" : [ "AR", "AU", "AT", "BE", "BO", "BR", "BG", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "DE", "EC", "EE", "SV", "FI", "FR", "GR", "GT", "HN", "HK", "HU", "IS", "IE", "IT", "LV", "LT", "LU", "MY", "MT", "MX", "NL", "NZ", "NI", "NO", "PA", "PY", "PE", "PH", "PL", "PT", "SG", "SK", "ES", "SE", "CH", "TW", "TR", "UY", "US", "GB", "AD", "LI", "MC", "ID" ],
  //               "disc_number" : 1,
  //               "duration_ms" : 188280,
  //               "explicit" : true,
  //               "external_ids" : {
  //                 "isrc" : "TCABT1491603"
  //               },
  //               "external_urls" : {
  //                 "spotify" : "https://open.spotify.com/track/0HsGh7cboYz6cVMIyFrQ8j"
  //               },
  //               "href" : "https://api.spotify.com/v1/tracks/0HsGh7cboYz6cVMIyFrQ8j",
  //               "id" : "0HsGh7cboYz6cVMIyFrQ8j",
  //               "name" : "Devil Like Me",
  //               "popularity" : 58,
  //               "preview_url" : "https://p.scdn.co/mp3-preview/5de0ff1cf0fa588440775840da4dd2fefd43fca5",
  //               "track_number" : 6,
  //               "type" : "track",
  //               "uri" : "spotify:track:0HsGh7cboYz6cVMIyFrQ8j"
  //             }
  // track = JSON.parse(track);

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