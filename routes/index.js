var express = require('express');
var router = express.Router();
var unirest = require('unirest');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/reddit', function (req,res,next) {
  var testcats = ['news','sports', 'celebrities', 'dataisbeautiful'];
  var random = Math.floor(Math.random() * (testcats.length));
  console.log(testcats[random]);
  unirest.get('https://www.reddit.com/r/'+testcats[random]+'.json?')
  .end(function (response) {
    var randomchild = Math.floor(Math.random() * (response.body.data.children.length));
    console.log(randomchild);
    var info = response.body.data.children[randomchild].data.url;
    res.json(info);
  });
});

module.exports = router;
