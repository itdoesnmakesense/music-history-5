define(function() {
 var songs = [];

 return {
   setSongs: function() {
    $.ajax({
        url: "javascripts/response.json",
        async: false
        }).done(function(data){
     songs = data.songs;
   });
  },

   getSongs: function() {
    return songs;
   }
 };
});

