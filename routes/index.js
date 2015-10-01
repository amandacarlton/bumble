var express = require('express');
var router = express.Router();
var unirest = require('unirest');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/reddit', function (req,res,next) {
  var testcats = ['videos'];
  var random = Math.floor(Math.random() * (testcats.length));
  console.log(testcats[random]);
  unirest.get('https://www.reddit.com/r/'+testcats[random]+'.json?')
  .end(function (response) {
    var randomchild = Math.floor(Math.random() * (response.body.data.children.length));
    console.log(randomchild);
    var info = response.body.data.children[randomchild].data;
    console.log(info.domain);
    if(info.domain === "youtube.com"){
      console.log(info.url);
     unirest.get('http://api.embed.ly/1/oembed?key=:'+process.env.EMBEDLY_API+'&url='+info.url)
     .end(function (tube) {
       console.log(tube.body);
       var regex = /src="(.+?)"/;
       var matches = regex.exec(tube.body.html);
       res.json(matches[1]);
     });
    }else{
      console.log(info.url);
    res.json(info.url);
    }
  });
});

module.exports = router;
