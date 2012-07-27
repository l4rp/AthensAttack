/* Get homepage */
exports.index = function(req, res){
  res.render('index', { title: 'Athens Attacks' })
};

/* Tropo's get route for text messages */

exports.sms = function (req, res) {
  var tropo = new tropowebapi.TropoWebAPI(); 

  tropo.say("Hello, World!");

  // Render out the JSON for Tropo to consume.
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(tropowebapi.TropoJSON(tropo));
};