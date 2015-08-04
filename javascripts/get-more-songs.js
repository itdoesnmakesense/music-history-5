define(function() {
 //var songs = [];
 //songs = data.songs

 return {
   setSongs: function(callback) {
    $.ajax({
        url: "javascripts/responseMore.json",
        }).done(function(dataMore){
     callback.call(this, dataMore.songs);
   });
},

 };
});