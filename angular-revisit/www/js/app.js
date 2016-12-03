(function(){
var app = angular.module('starter', ['ionic'])


app.controller('appCtrl', function($q, $scope, $timeout){

  // function add(x, y){
  //   return x + y;
  // }
  // $scope.result = add(5, 2);

  // function add(x, y, callback){
  //   $timeout(function(){
  //     callback(x + y);
  //   }, 1000)
  // }
  // var timenow = Date.now();
  // add(5, 2, function(result){
  //   add(result, 3, function(result){
  //     $scope.result = result;
  //     $scope.elapsed = Date.now() - timenow;
  //   });
  // });
  var q = $q.defer();

  function sum(x,y){
    $timeout(function(){
      var result = x + y;
      if(result >= 0){
        q.resolve(result);
      } else {
        q.reject('Negative result: ' + result);
      }
    }, 100)
    return q.promise;
  }

  sum(1, -10)
  .then(function(result){
    return sum(result, 1)
  })
  .then(function(result){
    $scope.newResult = result;
  })
  .catch(function(err){
    $scope.err = err;
  })
  .finally(function(){
    $scope.msg = 'no matter what happens this fn will run'
  })

  function add(x,y){
    return $timeout(function(){
      return x + y;
    },200)
  }

  var timenow = Date.now();
  var promise = add(5,2);
  promise
  .then(function(result){
    return add(result, 3);
  })
  .then(function(result){
    return add(result, 0);
  })
  .then(function(result){
    $scope.result = result;
    $scope.elapsed = Date.now() - timenow;
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
})
}())
