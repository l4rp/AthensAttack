var tropowebapi = require('tropo-webapi'),
    db          = require('../lib/db');

/* Get homepage */
exports.index = function(req, res){
  res.render('index', { title: 'Athens Attacks' })
};

/* Tropo's get route for text messages */

exports.sms = function (req, res) {
  var tropo = new tropowebapi.TropoWebAPI(),
      text  = req.body;

  // db.set({
  //   lat: text.split(',')[0],
  //   lon: text.split(',')[1],
  //   type: text.split(',')[2]
  // });

  tropo.say('Thank you');

  // Render out the JSON for Tropo to consume.
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(tropowebapi.TropoJSON(tropo));
};

exports.attacks = function (req, res) {
  db.get({}, function (data) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
  });
}