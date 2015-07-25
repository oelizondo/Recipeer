(function() {
  recipeer.controller('apiCtrl', function($scope, sharedData) {
    var URL, params;
    $scope.primaryOptions = ['Beef', 'Chicken', 'Fish', 'Cheese', 'Eggs'];
    $scope.secondaryOptions = ['Lettuce', 'Beans', 'Carrots', 'Tomatoes', 'Mushrooms', 'Onions', 'Potatoes', 'Pasta', 'Rice', 'Turnips', 'Cabbage', 'Pumpkin', 'Shrimp'];
    $scope.terciaryOptions = ['Salt', 'Pepper', 'Spices'];
    params = [];
    URL = 'http://api.yummly.com/v1/api/recipes?_app_id=9c953c03&_app_key=71d46663793f28c4477818649e4e6a40&q=';
    $(document).on('click', '.base_food', function() {
      var $param;
      $param = $(this).html();
      $(this).toggleClass('green-button');
      params.push($param);
      return console.log(params);
    });
    return $(document).on('click', '.next', function() {
      var byte, i, len;
      for (i = 0, len = params.length; i < len; i++) {
        byte = params[i];
        byte = byte + '+';
        console.log(byte);
        URL += byte;
      }
      console.log(URL);
      sharedData.recieveCallInfo(URL);
      return console.log('pushed next');
    });
  });

}).call(this);
