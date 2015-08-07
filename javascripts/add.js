
$('#add-button').on('click',function(){
var newSong = {
  "name" : $('#addSong').val(),
  "artists" : $('#addArtist').val(),
  "album" : {
    "name" : $('#addAlbum').val(),
  }

};






  console.log(newSong);

 $.ajax({
    url:"https://scorching-inferno-1464.firebaseio.com/songs.json",
    method: "POST",
    data: JSON.stringify(newSong)
  }).done(function(newSong){
    console.log("New Song:",newSong);
  });
});



