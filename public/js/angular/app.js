var app = angular.module('bumble', ['ui.router','angularModalService','ngCookies']);


app.config(function ($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/index.jade',
      controller: 'MainController'
    });
  });
