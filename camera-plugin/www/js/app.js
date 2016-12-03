(function(){

var app = angular.module('starter', ['ionic', 'ngCordova'])

app.controller('CameraCtrl', function($scope, $cordovaCamera){

  $scope.pictureUrl = 'http://placehold.it/300x300';
  $scope.takePicture = function(){

    var option = {
      destinationType: Camera.DestinationType.DATA_URL,
      encodingType: Camera.EncodingType.JPEG
    }

  $cordovaCamera.getPicture(option)
    .then(function(data){
      console.log('camera data: ' + angular.toJson(data));
      $scope.pictureUrl = "data:image/jpeg;base64," + data;
    }, function(err){
      console.log('camera err: ' + angular.toJson(err));
    });
  }
})

app.run(function($ionicPlatform) {
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
