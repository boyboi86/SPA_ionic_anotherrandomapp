
(function(){
var app = angular.module('starter', ['ionic'])

app.controller('slideCtrl', function($scope){

  $scope.slides = [];
  
  for(var i = 1; i <= 5; i++){
    $scope.slides.push({
      'title': 'Slides #' + i,
      'description': 'index of ' + i
    });
  }

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
})
}());
