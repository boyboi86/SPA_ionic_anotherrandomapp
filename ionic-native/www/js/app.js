(function() {

var app = angular.module('app', ['ionic', 'ionic.native']);

app.controller('CameraCtrl', function($scope, $cordovaCamera) {

	$scope.pictureUrl = 'http://placehold.it/300x300';

	$scope.takePicture = function() {
		var options = {
			destinationType: $cordovaCamera.DestinationType.DATA_URL,
      encodingType: $cordovaCamera.EncodingType.JPEG
		}
		$cordovaCamera.getPicture(options)
			.then(function(data) {
				//console.log('camera data: ' + angular.toJson(data));
				$scope.$apply(function() {
					$scope.pictureUrl = 'data:image/jpeg;base64,' + data;
				});
			}, function(error) {
				console.log('camera error: ' + angular.toJson(error));
			});
	};

});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

})();
