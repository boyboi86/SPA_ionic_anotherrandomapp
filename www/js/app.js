(function(){

  var app = angular.module('starter', ['ionic'])

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  });

  $stateProvider.state('details', {
    url: '/details',
    templateUrl: 'templates/details.html'
  });

  $stateProvider.state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html'
  });

  /* Tabs: For state configuration has to have a views object
    with the name of the ion-nav-view tag
    then embed templateUrl within it*/
  // $stateProvider.state('home', {
  //   url:'/home',
  //   views: {
  //     'tab-home': {
  //       templateUrl: 'templates/home.html'
  //     }
  //   }
  // })
  /*now details view share the same state history as tab-home*/
  // $stateProvider.state('details', {
  //   url:'/details',
  //   views: {
  //     'tab-home': {
  //       templateUrl: 'templates/details.html'
  //     }
  //   }
  // })

  // $stateProvider.state('settings', {
  //   url:'/settings',
  //   views: {
  //     'tab-settings': {
  //       templateUrl: 'templates/settings.html'
  //     }
  //   }
  // })

  $urlRouterProvider.otherwise('/home');
})


  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });
}())
