(function() {
  recipeer.service('sharedData', function() {
    var URL;
    URL = "";
    return {
      recieveCallInfo: function(url) {
        return URL = url;
      },
      getCallInfo: function() {
        return URL;
      }
    };
  });

}).call(this);
