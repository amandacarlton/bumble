app.factory('SessionService', function ($cookies) {
  return {
    set: function(id){
      $cookies.put('session_id', id);
      this.currentUser = $cookies.get('session_id');
      console.log($cookies.get('session_id'));
    }
  };
});


app.factory('CategoryService', function () {
  var categoryList = [
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
  ];

 var categoryobj = {

  categoryList: function () {
    return categoryList;
  }
};
return categoryobj;

});


app.factory('TimeService', function () {
  // body...
var startTime;

function display(startTime) {
    // later record end time
    var endTime = new Date();

    // time difference in ms
    var timeDiff = endTime - startTime;

    // strip the miliseconds
    timeDiff /= 1000;

    // get seconds
    var seconds = Math.round(timeDiff % 60);

    // remove seconds from the date
    timeDiff = Math.floor(timeDiff / 60);

    // get minutes
    var minutes = Math.round(timeDiff % 60);

    // remove minutes from the date
    timeDiff = Math.floor(timeDiff / 60);

    // get hours
    var hours = Math.round(timeDiff % 24);

    // remove hours from the date
    timeDiff = Math.floor(timeDiff / 24);

    // the rest of timeDiff is number of days
    var days = timeDiff;

    // $(".time").text(days + " days, " + hours + ":" + minutes + ":" + seconds);
    // setTimeout(display, 1000);
}

$("input#button").click(function () {
    startTime = new Date();
    setTimeout(display, 1000);
});
});
