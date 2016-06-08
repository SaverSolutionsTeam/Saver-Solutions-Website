// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
ionicApp = angular.module('starter', ['ionic', 'starter.controllers',"ngMessages"])

ionicApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

ionicApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })
  
  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
      controller:'registerCtrl'
   
  })
  
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html',
          controller: 'profileCtrl'
      }
    }
  })

  .state('app.stats', {
      url: '/stats',
      views: {
        'menuContent': {
          templateUrl: 'templates/stats.html'
        }
      }
    })
    .state('app.tips', {
      url: '/tips',
      views: {
        'menuContent': {
          templateUrl: 'templates/tips.html'
        }
      }
    })

 .state('app.goals', {
    url: '/goals',
    views: {
      'menuContent': {
        templateUrl: 'templates/goals.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
