
app.controller('MainController', ['$scope', 'ModalService', '$http', '$sce', '$cookies', '$cookieStore', function ($scope, ModalService, $http, $sce, $cookies, $cookieStore) {

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



  }]);


  app.controller('ModalController', function($scope, close, $http, $cookies) {
  $scope.ok = function (credentials) {
    $http.post("/insertuser", credentials).then(function (response) {
      $cookies.put('name', credentials.name);
      var cookiename = $cookies.get('name');
      console.log(cookiename);
      console.log($cookies.getAll());
    });
  };

   $scope.close = function(result) {
   	close(result); // close, but give 500ms for bootstrap to animate
   };
   });
