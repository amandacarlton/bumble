
app.controller('MainController', ['$scope', 'ModalService', '$http', '$sce', function ($scope, ModalService, $http, $sce) {

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


  app.controller('ModalController', function($scope, close, $http) {
  $scope.ok = function (credentials) {
    console.log(credentials);
    $http.post("/insertuser", credentials);
  };
   $scope.close = function(result) {
   	close(result); // close, but give 500ms for bootstrap to animate
   };
   });
