recipeer.controller('individualRecipeCtrl', ($scope, $http, $route, sharedData) ->
	$scope.url = sharedData.getCallforId()

	console.log $scope.url

	$http.get($scope.url)
	.success((data)->
		$scope.data = data
		console.log $scope.data
	)
)