recipeer.config(($routeProvider) -> 
	$routeProvider
	.when '/', {
		templateUrl: 'views/landing.html',
		controller: 'miscCtrl' 
	}
	.when '/action', {
		templateUrl: 'views/action.html',
		controller: 'apiCtrl'
	}
	.when '/result', {
		templateUrl: 'views/result.html',
		controller: 'resultsCtrl'
	}
	.otherwise '/'
)