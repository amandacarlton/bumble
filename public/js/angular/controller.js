
app.controller('MainController', ['$scope', 'ModalService', '$http', '$sce', '$cookies', '$cookieStore','SessionService', function ($scope, ModalService, $http, $sce, $cookies, $cookieStore, SessionService) {

  $scope.loggedInUser = SessionService;




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
    console.log('test');
  $http.get('/reddit').then(function (info) {

    $scope.url = $sce.trustAsResourceUrl(info.data);
    console.log($scope.url);
  });
  };

  $scope.removeCookie = function () {
    $cookies.remove('session_id');
    SessionService.currentUser = null;
  };

  }]);


  app.controller('ModalController', function($scope, close, $http, $cookies, SessionService) {
  $scope.ok = function (credentials) {
    $http.post("/insertuser", credentials).then(function (response) {
      console.log(response);
      SessionService.set(response.data._id);
      $location.path('/userpref/' + response.data._id);
      console.log($cookies.getAll());
      // $cookies.put('id', response.data._id);
      // $cookies.put('name', response.data.name);
      // var cookiename = $cookies.get('id');
      // console.log($cookies.get("name"));
    });
  };

   $scope.close = function(result) {
   	close(result); // close, but give 500ms for bootstrap to animate
   };
   });
