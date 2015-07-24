(function() {
  var Ingredients, Recipe;

  recipeer.controller('apiCtrl', function($scope, $http) {
    return $http.get('https://api.yummly.com/v1/api/recipes?_app_id=9c953c03&_app_key=71d46663793f28c4477818649e4e6a40&q=bakes+salmon').success(function(data) {
      return $scope.recipe = data;
    });
  });

  Recipe = (function() {
    function Recipe(attributes) {
      if (attributes == null) {
        attributes = {};
      }
      this.username = attributes.login;
    }

    return Recipe;

  })();

  Ingredients = (function() {
    function Ingredients(attributes) {
      if (attributes == null) {
        attributes = {};
      }
    }

    Ingredients.domCaching = function() {};

    Ingredients.sendIngredients = function() {};

    return Ingredients;

  })();

}).call(this);
