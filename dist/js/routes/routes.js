(function() {
  recipeer.config(function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'views/landing.html',
      controller: 'titlesCtrl'
    }).when('/action', {
      templateUrl: 'views/action.html',
      controller: 'apiCtrl'
    }).otherwise('/');
  });

}).call(this);
