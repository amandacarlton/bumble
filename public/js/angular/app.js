var app = angular.module('bumble', ['ui.router','angularModalService','ngCookies','datamaps','bubbleCloud','calHeatmap']);


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
    })
    .state('stumble', {
      url: '/stumble',
      templateUrl:'partials/stumble.html',
      contoller:'MainController'
    })
    .state('trending', {
      url: '/trending',
      templateUrl:'partials/trending.html',
      contoller:'MainController'
    })
    .state('statesub', {
      url: '/statesub',
      templateUrl:'partials/mappop.html',
      contoller:'MainController'
    })
    .state('bubble', {
      url: '/bubble',
      templateUrl:'partials/bubble.html',
      contoller:'MainController'
    })
    .state('zoom', {
      url: '/zoom',
      templateUrl:'partials/zoom.html',
      contoller:'MainController'
    })
    .state('heat', {
      url: '/heat',
      templateUrl:'partials/heatmap.html',
      contoller:'MainController'
    });

  });
