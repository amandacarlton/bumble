
app.controller('MainController', ['$scope', 'ModalService', '$http', '$sce', '$cookies', '$cookieStore','SessionService', '$location', 'CategoryService', function ($scope, ModalService, $http, $sce, $cookies, $cookieStore, SessionService, $location, CategoryService) {

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

  $scope.categories = CategoryService.categoryList();

  console.log($scope.categories);

  }]);


  app.controller('ModalController', function($scope, close, $http, $cookies, SessionService, $location) {
  $scope.ok = function (credentials) {
    $http.post("/insertuser", credentials).then(function (response) {
      console.log(response);
      SessionService.set(response.data._id);
      console.log($cookies.getAll());
      $location.path('/userpref');
      console.log($location.path);

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
