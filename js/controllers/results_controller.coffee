recipeer.controller('resultsCtrl', ($scope, $http, sharedData) ->
	$scope.url = sharedData.getCallInfo()
	$scope.recipes = []
	$scope.images = []

	console.log $scope.url
	$http.get($scope.url)
	.success((data)->
		$scope.recipes = data.matches
		console.log $scope.recipes
		for recipe in $scope.recipes
			recipe.imageUrlsBySize[350] = recipe.imageUrlsBySize[90].replace('s90', 's350')
			console.log recipe.imageUrlsBySize[350]
	)
)