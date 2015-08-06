define(function() {

 return {
   setSongs: function(callback) {
    $.ajax({
        url: "javascripts/response.json"
        }).done(function(data){
        callback.call(this, data);
   });
  }
};
  });

