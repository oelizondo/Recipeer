recipeer.controller('apiCtrl', ($scope, $route, sharedData) ->
	$scope.primaryOptions = ['Beef', 'Chicken', 'Fish', 'Cheese', 'Eggs', 'Salmon']
	$scope.secondaryOptions = ['Lettuce', 'Beans', 'Carrots', 'Tomatoes', 'Mushrooms', 'Onions', 'Potatoes', 'Pasta', 'Rice', 'Turnips', 'Cabbage', 'Pumpkin', 'Shrimp', 'Bread', 'Corn', 'Spinach', 'Pickles']
	$scope.terciaryOptions = ['Salt', 'Peppers', 'Spices', 'Garlic', 'Butter', 'Salsa', 'Cilantro', 'Seasoning', 'OliveOil']
	params = []
	URL = 'http://api.yummly.com/v1/api/recipes?_app_id=9c953c03&_app_key=71d46663793f28c4477818649e4e6a40&q='

	$(document).on('click', '.base_food', ->
		$param = $(this).html()
		$(this).toggleClass('green-button')
		params.push($param)
		console.log params
	)

	$(document).on('click', '.next', ->
		for byte in params
			byte = byte + '+'
			URL += byte
		sharedData.recieveCallInfo(URL)
	)
)