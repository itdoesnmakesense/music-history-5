define(["jquery","q"], function($,Q){
  

  return function(newSong){
    var deferred = Q.defer();
    console.log(newSong);

  $.ajax({
      url:"https://scorching-inferno-1464.firebaseio.com/songs.json",
      method: "POST",
      data: JSON.stringify(newSong)
   }).done(function(newSong){
    console.log(newSong);
    deferred.resolve(newSong);
  })
  .fail(function(xhr,status,error){
    deferred.reject(error);
  });



  return deferred.promise;

};


});



// $('#add-button').on('click',function(){
// var newSong = {
//   "name" : $('#addSong').val(),
//   "artists" : $('#addArtist').val(),
//   "album" : {
//     "name" : $('#addAlbum').val(),
//   }

// };

//   console.log(newSong);

//  $.ajax({
//     url:"https://scorching-inferno-1464.firebaseio.com/songs.json",
//     method: "POST",
//     data: JSON.stringify(newSong)
//   }).done(function(newSong){
//     console.log("New Song:",newSong);
//   });
// });
