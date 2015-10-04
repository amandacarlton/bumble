var app = angular.module('bumble', ['ui.router','angularModalService','ngCookies']);


app.config(function ($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/stumble.html',
      controller: 'MainController'
    })

    .state('userpref', {
      url: '/userpref',
      templateUrl:'partials/categories.html',
      contoller:'MainController'
    });
  });
