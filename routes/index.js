var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var bumdb = require('monk')(process.env.MONGOLAB_URI);
var userCollection = bumdb.get('user');
var catCollection = bumdb.get('cat');
var bcrypt= require('bcrypt');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/reddit', function (req,res,next) {
  userCollection.findOne({_id:req.body.user_id}).then(function (response) {
    var testcats = response.interest;
    var random = Math.floor(Math.random() * (testcats.length));
    var categoryChosen = (testcats[random]);
    unirest.get('https://www.reddit.com/r/'+testcats[random]+'.json?')
    .end(function (response) {
      var randomchild = Math.floor(Math.random() * (response.body.data.children.length));
      var info = response.body.data.children[randomchild].data;
      console.log(info.domain);
      // if(info.domain === "self."+categoryChosen)
      info.category = categoryChosen;
      if(info.domain === "youtube.com" || info.domain === "twitter.com" || info.domain === "vine.co" || info.domain === "m.youtube.com" || info.domain === "google.com" || info.domain === "en-maktoob.news.yahoo.com"){
        unirest.get('http://api.embed.ly/1/oembed?key=:'+process.env.EMBEDLY_API+'&url='+info.url)
        .end(function (tube) {
          console.log(tube.body);
          var regex = /src="(.+?)"/;
          var matches = regex.exec(tube.body.html);
          res.json(matches[1]);
        });
      }else{
        res.json(info);
      }
    });
  });
});


// router.post("/likedinsert", function (req, res, next) {
//   catCollection.update({user_id:req.body.user_id, categoryname:req.body.category}, {$push: {liked:req.body.site}});
// });
//
// router.post("/dislikedinsert", function (req, res, next) {
//   catCollection.update({user_id:req.body.user_id, categoryname:req.body.category}, {$push: {disliked:req.body.site}});
// });

router.post('/insert', function (req, res, next) {
  //var category={};
  // category[req.body.interest] = {liked:[], disliked:[], time: {timeliked:[], timedisliked:[], timeall:[]}};
  catCollection.insert({user_id:req.body.user_id, categoryname:req.body.interest, liked:[], disliked:[], indifferent:[], alltime:[], timeliked:[], timedisliked:[]});
  //catCollection.insert({user_id:req.body.user_id, categoryname:req.body.interest, site:[]});
  userCollection.update({_id:req.body.user_id}, {$push:{interest:req.body.interest}});
});

router.post('/articleInfo', function (req, res, next) {
  console.log(req.body);
  catCollection.update({user_id:req.body.user_id, categoryname:req.body.category}, {$push:{site:{url:req.body.url, opinion:req.body.opinion, time:req.body.timer}}});
});
// router.post('/timeliked', function (req,res,next) {
//   catCollection.update({user_id:req.body.user_id, categoryname:req.body.category}, {$push: {timeliked:req.body.timer}});
// });
//
// router.post('/timedisliked', function (req,res,next) {
//   catCollection.update({user_id:req.body.user_id, categoryname:req.body.category}, {$push: {timedisliked:req.body.timer}});
// });
//
// router.post('/alltime', function (req,res,next) {
//   catCollection.update({user_id:req.body.user_id, categoryname:req.body.category}, {$push: {alltime:req.body.timer}});
// });

router.post('/insertuser', function (req, res, next) {
  var hash = bcrypt.hashSync(req.body.password, 8);
  userCollection.insert({name:req.body.name, email:req.body.email, password:hash, interest:[]}).then(function (response) {
    res.json(response);
  });




});

module.exports = router;
