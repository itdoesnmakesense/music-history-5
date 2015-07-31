


////delete button to delete individual songs
//look up closest()
  $('#delete').on('click',function(){
    console.log("clicked");
        var removeClass = $('#song-container').addClass('remove');
        removeClass.remove();
      
    });


////// response.json
  function firstSongList(data) {
    var divResponse = $(".actual-songs");
    var songInfo = "";
    var currentSong;

        for (var i = 0; i <= data.songs.length; i++ ) {
        currentSong = data.songs[i];

        songInfo += "<div id= 'song-container'>";
        songInfo += "<div id='song-title' class='song-info'><p>" + currentSong.name +" | "+ currentSong.artists + "</p></div>";
        songInfo += "<div id='song-album' class='song-info'><p>" + currentSong.album.name + " | " + currentSong.album.year + "</p>" + "</div>";
        songInfo +=  "<button id='delete'>"+ "Delete" + "</button>"+"</div>";
        divResponse.html(songInfo);
  }

}
console.log(firstSongList())


////// more button to call responseMore.json
$(function(){
    $('#moreButton').on('click',function(){
     console.log('click');
      });
    });
///////////////////////

///// responseMore.json
function secondSongList(data){
            var songInfo = "";
            var currentSong;
            var buttonInfo = $("#moreSongs");

        for (var i = 0; i <= data.songs.length; i++ ) {
        currentSong = data.songs[i];
        

        songInfo += "<div class= 'song-container'>";
        songInfo += "<div class='song-title'><p>" + currentSong.name +" | "+ currentSong.artists + "</p></div>";
        songInfo += "<div class = 'song-info'>";
        songInfo += "<p>" + currentSong.album.name + " | " + currentSong.album.year + "</p>" + "</div>";
        songInfo +=  "</div>";
        buttonInfo.html(songInfo);
        }
        return secondSongList;
        }



//add concat() to each class to make each song unique when it goes through the loop

  // $('#delete').on('click',function(){
  //   $('#actual-songs').remove('slow');
  // });






