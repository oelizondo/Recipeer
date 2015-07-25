(function() {
  recipeer.controller('individualRecipeCtrl', function($scope, $http, $route, sharedData) {
    $scope.url = sharedData.getCallforId();
    console.log($scope.url);
    return $http.get($scope.url).success(function(data) {
      $scope.data = data;
      return console.log($scope.data);
    });
  });

}).call(this);
