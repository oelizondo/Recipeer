(function() {
  recipeer.config(function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'views/landing.html',
      controller: 'miscCtrl'
    }).when('/action', {
      templateUrl: 'views/action.html',
      controller: 'apiCtrl'
    }).when('/result', {
      templateUrl: 'views/result.html',
      controller: 'resultsCtrl'
    }).otherwise('/');
  });

}).call(this);
