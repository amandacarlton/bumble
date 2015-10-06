
app.controller('MainController', ['$scope', 'ModalService', '$http', '$sce', '$cookies', '$cookieStore','SessionService', '$location', 'CategoryService', function ($scope, ModalService, $http, $sce, $cookies, $cookieStore, SessionService, $location, CategoryService) {

  $scope.loggedInUser = $cookies.get('session_id');
  $scope.categoryChosen="";
  $scope.preurl="";
  $scope.prevStart ="";
  $scope.likedvalue="indifferent";
  $scope.preliked="";
  $scope.timeDiff="";
  $scope.likedchecked=false;
  $scope.dislikedchecked=false;
  $scope.checkedInterest="";


  $scope.starttimer = function () {
   $scope.prevStart = $scope.startTime;
   $scope.startTime = new Date();
  };

  $scope.endtimer = function () {
    $scope.endTime = new Date();
    $scope.timeDiff = $scope.endTime - $scope.prevStart;
    //timeDiff /= 1000;
    // var timeobj = {
    //   user_id:$scope.loggedInUser,
    //   category : $scope.categoryChosen,
    //   timer: $scope.timeDiff
    // };
    // if($scope.preliked===true){
    //   $http.post('/timeliked', timeobj);
    //   $http.post('/alltime', timeobj);
    // }else if($scope.preliked===false){
    //   $http.post("/timedisliked", timeobj);
    //   $http.post("/alltime", timeobj);
    // // }else{
    // //   $http.post("/alltime", timeobj);
    // }

  };


  $scope.signup = function() {
    ModalService.showModal({
      templateUrl: 'partials/signup.html',
      controller: "ModalController"
    }).then(function(modal) {
      modal.element.modal();
      modal.close.then(function(result) {
        $scope.message = "You said " + result;
      });
    });
  };

  $scope.signin = function() {
    ModalService.showModal({
      templateUrl: 'partials/signin.html',
      controller: "ModalController"
    }).then(function(modal) {
      modal.element.modal();
      modal.close.then(function(result) {
        $scope.message = "You said " + result;
      });
    });
  };

  $scope.reddit = function () {
    $scope.likedchecked=false;
    $scope.dislikedchecked=false;
    $scope.preliked = $scope.likedvalue;
    $scope.likedvalue="indifferent";
    var redditobj = {
      user_id: $scope.loggedInUser
    };
    $http.post('/reddit', redditobj ).then(function (info) {
      $scope.categoryChosen = info.data.category;
      $scope.preurl = info.data.url;
      $scope.url = $sce.trustAsResourceUrl(info.data.url);
       console.log($scope.url);
       console.log($scope.categoryChosen);
      $location.path('/stumble');
    });
  };

  $scope.articleInfo = function () {
     var articleObj = {
       category: $scope.categoryChosen,
       user_id: $scope.loggedInUser,
       timer:$scope.timeDiff,
       opinion:$scope.preliked,
       url: $scope.preurl
     };
     //console.log(articleObj);
     $http.post('/articleInfo', articleObj);
  };

  $scope.removeCookie = function () {
    $cookies.remove('session_id');
    $scope.loggedInUser = null;
    $location.path("/");
  };

 $scope.allcats = CategoryService.categoryList();

  $scope.categoryList = function () {
  // $scope.allcats = CategoryService.categoryList();
  var userobj = {
    user_id:$scope.loggedInUser
  };
  $http.post("/userinfo", userobj).then(function (response) {
    console.log(response);
    $scope.checkedInterest= response.data.interest;
    console.log($scope.checkedInterest);
    //console.log(checkedData);
  });
};

$scope.categoryList();

$scope.checkArrayFor = function (category) {
  return ($scope.checkedInterest.indexOf(category)>-1);
};

  $scope.getSubredditInfo = function () {
   var subscriberobj = {
     category:  CategoryService.categoryList()
   };

   console.log(subscriberobj);
   $http.post("/subscriber", subscriberobj).then(function (response) {
     console.log(response);
   });
  };


  $scope.interestInsert = function (category) {
    $scope.interest = [];
    var interestobj = {
      user_id:$scope.loggedInUser,
      interest:category
    };
    $http.post("/insert", interestobj);
  };

  $scope.liked = function () {
    $scope.likedchecked=true;
    console.log($scope.likedchecked=true);
    $scope.likedvalue = "liked";
    var likedobj = {
      user_id:$scope.loggedInUser,
      category : $scope.categoryChosen,
      site: $scope.preurl
    };
  };

  $scope.disliked = function () {
    $scope.dislikedchecked=true;
    $scope.likedvalue = "disliked";
    var dislikedobj = {
      user_id:$scope.loggedInUser,
      category : $scope.categoryChosen,
      site: $scope.preurl
    };
  };

  $scope.trending = function () {
    $http.get("/reddittrend").then(function (response) {
      console.log(response.data[0]);
       $scope.trendings = response.data;
    });
  };


}]);


app.controller('ModalController', function($scope, close, $http, $cookies, SessionService, $location) {
  $scope.ok = function (credentials) {
    $http.post("/insertuser", credentials).then(function (response) {
      SessionService.set(response.data._id);
      $scope.loggedInUser = $cookies.get('session_id');
      console.log($scope.loggedInUser);
      console.log("here");
      $location.path('/userpref');
    });
  };



  $scope.checkuser = function (checking) {
    console.log("here");
    console.log(checking);
    $http.post("/checkuser", checking).then(function (response) {
      console.log(response);
      if(response.data === null){
        $scope.errors = "User not found";
      }else if (response.data.good === false){
        $scope.errors = "Password does not match";
      }else{
        SessionService.set(response.data._id);
        $location.path('/stumble');
      }
    });
  };

  $scope.close = function(result) {
    close(result);
  };
});
