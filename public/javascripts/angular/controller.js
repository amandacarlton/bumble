

app.controller('MainController', ['$scope', 'ModalService', function ($scope, ModalService) {

$scope.signup = function () {

ModalService.showModal({
    templateUrl: "template.html",
    controller: "ModalController"
  }).then(function(modal) {

    //it's a bootstrap element, use 'modal' to show it
    modal.element.modal();
    modal.close.then(function(result) {
      console.log(result);
    });
  });
};
}]);
