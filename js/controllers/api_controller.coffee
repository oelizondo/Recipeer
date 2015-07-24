recipeer.controller('apiCtrl', ($scope, $http) ->
	$http.get 'https://api.yummly.com/v1/api/recipes?_app_id=9c953c03&_app_key=71d46663793f28c4477818649e4e6a40&q=bakes+salmon'
	.success((data) ->
		$scope.recipe = data
	)
)

class Recipe
	constructor: (attributes={}) ->
		@username = attributes.login

class Ingredients
	constructor: (attributes={}) ->

	@domCaching: ->

	@sendIngredients: ->
