var request = require('request');
var sync    = require('sync-request');

require('dotenv').config();

var spotify = {
  requestToken: function () {
    var encoded_credentials = new Buffer(`${process.env.spotify_client_id}:${process.env.spotify_client_secret}`).toString("base64");
    var options = {
      url: "https://accounts.spotify.com/api/token",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + encoded_credentials
      },
      body: "grant_type=client_credentials"
    };
    var res = sync("POST", "https://accounts.spotify.com/api/token", options);
    return JSON.parse(res.getBody('utf8'));
  },

  search: function (type, search, callback) {
    var q = search.split(" ").join("%20");
    var url = `https://api.spotify.com/v1/search?q=${q}&type=${type}&limit=8`;

    request(url, function (err, res, body) {
      if (err) { throw err };
      callback(JSON.parse(res.body));
    });
  },

  searchSync: function (type, search, callback) {
    var q = search.split(" ").join("%20");
    var url = `https://api.spotify.com/v1/search?q=${q}&type=${type}&limit=8`;

    var response = sync("GET", url, function (err, res, body) {
      if (err) { throw err };
      return res;
    });

    callback(response);
  },

  find: function (type, id, callback) {
    var url = `https://api.spotify.com/v1/${type}/${id}`;
    var token = this.requestToken();
    var options = {
      headers: {
        'Authorization': `Bearer ${token.access_token}`
      }
    };

    var response = sync('GET', url, options, function (err, res, body) {
      if (err) {throw err};
      return res;
    });

    callback(response);
  }
}

module.exports = spotify