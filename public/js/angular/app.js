var app = angular.module('bumble', ['ui.router','angularModalService','ngCookies','datamaps','bubbleCloud','calHeatmap','angularCharts']);


app.config(function ($stateProvider) {
  $stateProvider
    .state('home', {
      data: {
        bodyClass: 'splash'
    },
      name:'work',
      url: '',
      templateUrl: 'partials/splash.html',
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
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl:'partials/dashboard.html',
      contoller:'MainController'
    })
    .state('trendart', {
      url: '/trendart',
      templateUrl:'partials/trendart.html',
      contoller:'MainController'
    });

  });
