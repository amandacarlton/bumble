
app.controller('MainController', ['$scope', 'ModalService', function ($scope, ModalService) {

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


  }]);


  app.controller('ModalController', function($scope, close) {
    // $scope.ok = function (newMessage) {
    //
    //  $http.post('http://localhost:3000/api/insert', {newMessage:newMessage});
    // };

   $scope.close = function(result) {
   	close(result); // close, but give 500ms for bootstrap to animate
   };
   });
