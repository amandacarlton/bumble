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

router.post('/reddit', function (req,res,next) {
  userCollection.findOne({_id:req.body.user_id}).then(function (response) {
  var testcats = response.interest;
  var random = Math.floor(Math.random() * (testcats.length));
  unirest.get('https://www.reddit.com/r/'+testcats[random]+'.json?')
  .end(function (response) {
    var randomchild = Math.floor(Math.random() * (response.body.data.children.length));
    var info = response.body.data.children[randomchild].data;
    if(info.domain === "youtube.com" || info.domain === "twitter.com" || info.domain === "vine.co" || info.domain === "m.youtube.com"){
     unirest.get('http://api.embed.ly/1/oembed?key=:'+process.env.EMBEDLY_API+'&url='+info.url)
     .end(function (tube) {
       var regex = /src="(.+?)"/;
       var matches = regex.exec(tube.body.html);
       res.json(matches[1]);
     });
    }else{
    res.json(info.url);
    }
  });
});
});

router.post('/insert', function (req, res, next) {
  var category={};
  category[req.body.interest] = {liked:[], disliked:[], time: {timeliked:[], timedisliked:[], timeall:[]}};
  userCollection.update({_id:req.body.user_id}, { $set: category});
  userCollection.update({_id:req.body.user_id}, {$push:{interest:req.body.interest}});


});

router.post('/insertuser', function (req, res, next) {
  var hash = bcrypt.hashSync(req.body.password, 8);
  userCollection.insert({name:req.body.name, email:req.body.email, password:hash, interest:[]}).then(function (response) {
   res.json(response);
  });



});

module.exports = router;
