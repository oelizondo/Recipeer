(function() {
  recipeer.service('sharedData', function() {
    var INGREDIENTS, URL;
    URL = "";
    INGREDIENTS = [];
    return {
      recieveCallInfo: function(url) {
        return URL = url;
      },
      getCallInfo: function() {
        return URL;
      },
      sendRecipeCall: function(id) {
        return URL = "http://api.yummly.com/v1/api/recipe/" + id + "?_app_id=9c953c03&_app_key=71d46663793f28c4477818649e4e6a40";
      },
      getCallforId: function() {
        return URL;
      },
      recieveIngredients: function(ingredients) {
        return INGREDIENTS = ingredients;
      },
      sendIngredients: function() {
        return INGREDIENTS;
      }
    };
  });

}).call(this);
