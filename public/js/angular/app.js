var app = angular.module('bumble', ['ui.router','angularModalService']);


app.config(function ($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/index.jade',
      controller: 'MainController'
    });
  });
