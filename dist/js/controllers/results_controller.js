(function() {
  recipeer.controller('resultsCtrl', function($scope, $http, sharedData) {
    $scope.url = sharedData.getCallInfo();
    $scope.recipes = [];
    $scope.images = [];
    console.log($scope.url);
    return $http.get($scope.url).success(function(data) {
      var i, len, recipe, ref, results;
      $scope.recipes = data.matches;
      console.log($scope.recipes);
      ref = $scope.recipes;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        recipe = ref[i];
        recipe.imageUrlsBySize[350] = recipe.imageUrlsBySize[90].replace('s90', 's350');
        results.push(console.log(recipe.imageUrlsBySize[350]));
      }
      return results;
    });
  });

}).call(this);
