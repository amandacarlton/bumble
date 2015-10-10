var db = require('monk')('localhost/bumble');
var posts = db.get('posts');

var stateposts = [{}];

posts.insert( stateposts );
