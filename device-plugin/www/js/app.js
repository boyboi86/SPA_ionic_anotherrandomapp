(function(){
var app = angular.module('starter', ['ionic', 'ngCordova'])

app.controller('DeviceCtrl', function($scope, $cordovaDevice, $ionicPlatform){
  /*This $ionicPlatform will not work for web*/ 
  $ionicPlatform.ready(function() {
    /*device cordova is seperated from digest loop that is why angular need to $apply to include it*/
    $scope.$apply(function(){
      $scope.device = $cordovaDevice.getDevice();
    });
      // console.log('device is ' + angular.toJson(device));
    })
})

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
}())
