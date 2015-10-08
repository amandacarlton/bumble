var express = require('express');
var router = express.Router();
var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var bumdb = require('monk')(process.env.MONGOLAB_URI);
var userCollection = bumdb.get('user');
var catCollection = bumdb.get('cat');
var bcrypt= require('bcrypt');
// var google = require('googleapis');
// var bigquery = google.bigquery('v2');
// var params = { limit: 10 };

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// bigquery.datasets.get(params, function (err, response) {
//   if (err) {
//     console.log('Encountered error', err);
//   } else {
//     console.log('Long url is', response.longUrl);
//   }
// });

module.exports = router;
