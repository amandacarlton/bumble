app.factory('SessionService', function ($cookies) {
  return {
    set: function(id){
      $cookies.put('session_id', id);
      this.currentUser = id;
    }
  };
});


app.factory('CategoryService', function () {
 var categoryobj = {

  categoryList: [
    "Art",
    "aww",
    "books",
    "creepy",
    "dataisbeautiful",
    "DIY",
    "Documentaries",
    "EarthPorn",
    "food",
    "funny",
    "Futurology",
    "gadgets",
    "gaming",
    "GetMotivated",
    "gifs",
    "history",
    "InternetIsBeautiful",
    "listentothis",
    "mildlyinteresting",
    "movies",
    "Music",
    "news",
    "nottheonion",
    "OldSchoolCool",
    "philosophy",
    "pics",
    "science",
    "space",
    "sports",
    "television",
    "todayilearned",
    "TwoXChromosomes",
    "UpliftingNews",
    "videos",
    "worldnews",
    "Sloth",
    "puppies",
    "homebrewing",
    "animals",
    "travel",
    "wtf"
  ]
};
return categoryobj;

});
