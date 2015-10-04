var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var userdb = require('monk')(process.env.MONGOLAB_URI);
var userCollection = userdb.get('user');
var bcrypt= require('bcrypt');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/reddit', function (req,res,next) {
  var testcats = ['videos', 'sports', 'news', 'puppies', 'pics', 'travel'];
  var random = Math.floor(Math.random() * (testcats.length));
  console.log(testcats[random]);
  unirest.get('https://www.reddit.com/r/'+testcats[random]+'.json?')
  .end(function (response) {
    var randomchild = Math.floor(Math.random() * (response.body.data.children.length));
    console.log(randomchild);
    var info = response.body.data.children[randomchild].data;
    console.log(info.domain);
    if(info.domain === "youtube.com" || info.domain === "twitter.com" || info.domain === "vine.co" || info.domain === "m.youtube.com"){
      console.log(info.url);
     unirest.get('http://api.embed.ly/1/oembed?key=:'+process.env.EMBEDLY_API+'&url='+info.url)
     .end(function (tube) {
       console.log(tube.body);
       var regex = /src="(.+?)"/;
       var matches = regex.exec(tube.body.html);
       res.json(matches[1]);
     });
    }else{
    res.json(info.url);
    }
  });
});

router.post('/insert', function (req, res, next) {
  console.log("here");
  console.log(req.body.user_id);
  console.log(req.body);
 userCollection.update({_id:req.body.user_id}, { $push: { interest: req.body.interest } });


});

router.post('/insertuser', function (req, res, next) {
  console.log(req.body);
  var hash = bcrypt.hashSync(req.body.password, 8);
  userCollection.insert({name:req.body.name, email:req.body.email, password:hash, interest:[]}).then(function (response) {
   res.json(response);
  });



});

module.exports = router;
