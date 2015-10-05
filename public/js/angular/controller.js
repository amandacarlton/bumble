
app.controller('MainController', ['$scope', 'ModalService', '$http', '$sce', '$cookies', '$cookieStore','SessionService', '$location', 'CategoryService', function ($scope, ModalService, $http, $sce, $cookies, $cookieStore, SessionService, $location, CategoryService) {

  $scope.loggedInUser = $cookies.get('session_id');
  $scope.categoryChosen="";
  $scope.preurl="";
   $scope.prevStart ="";

  $scope.starttimer = function () {
   $scope.prevStart = $scope.startTime;
   $scope.startTime = new Date();
  };

  $scope.endtimer = function () {
    $scope.endTime = new Date();
    var timeDiff = $scope.endTime - $scope.prevStart;
    timeDiff /= 1000;
    console.log(timeDiff);
    
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
    var redditobj = {
      user_id: $scope.loggedInUser
    };
    $http.post('/reddit', redditobj ).then(function (info) {
      $scope.categoryChosen = info.data.category;
      $scope.preurl = info.data.url;
      $scope.url = $sce.trustAsResourceUrl(info.data.url);
      $location.path('/stumble');
    });
  };

  $scope.removeCookie = function () {
    $cookies.remove('session_id');
    $scope.loggedInUser = null;
  };

  $scope.categories = CategoryService.categoryList();

  $scope.interestInsert = function (category) {
    var interestobj = {
      user_id:$scope.loggedInUser,
      interest:category
    };

    $http.post("/insert", interestobj);
  };

  $scope.liked = function () {
    var likedobj = {
      user_id:$scope.loggedInUser,
      category : $scope.categoryChosen,
      site: $scope.preurl
    };
    $http.post("/likedinsert", likedobj);
  };

  $scope.disliked = function () {
    var dislikedobj = {
      user_id:$scope.loggedInUser,
      category : $scope.categoryChosen,
      site: $scope.preurl
    };
    $http.post("/dislikedinsert", dislikedobj);
  };

}]);


app.controller('ModalController', function($scope, close, $http, $cookies, SessionService, $location) {
  $scope.ok = function (credentials) {
    $http.post("/insertuser", credentials).then(function (response) {
      SessionService.set(response.data._id);
      $location.path('/userpref');
    });
  };

  $scope.close = function(result) {
    close(result);
  };
});
