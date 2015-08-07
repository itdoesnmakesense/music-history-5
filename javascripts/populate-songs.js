define(function() {

 return {
   setSongs: function(callback) {
    $.ajax({
        url: "https://scorching-inferno-1464.firebaseio.com/.json"
        }).done(function(data){
        callback.call(this, data);
   });
  }
};
  });

