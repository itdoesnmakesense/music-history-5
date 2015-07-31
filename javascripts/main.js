requirejs(["dom-access", "populate-songs", "get-more-songs"], 
  function(dom,pop,more){
      console.log("dom", dom);

      pop.setSongs();
      console.log("pop", pop.getSongs());

      more.setSongs();
      console.log("more", more.getSongs());

  function firstSongList(data) {
    var divResponse = $(".actual-songs");
    var songInfo = "";
    var currentSong;
    var popSongs = pop.getSongs();

        for (var i = 0; i <= popSongs.length; i++ ) {
        currentSong = popSongs[i];
       
        songInfo += "<div id= 'song-container'>";
        songInfo += "<div id='song-title' class='song-info'><p>" + currentSong.name +" | "+ currentSong.artists + "</p></div>";
        songInfo += "<div id='song-album' class='song-info'><p>" + currentSong.album.name + " | " + currentSong.album.year + "</p>" + "</div>";
        songInfo +=  "<button id='delete'>"+ "Delete" + "</button>"+"</div>";
        divResponse.html(songInfo);
  }

}
return firstSongList();


function secondSongList(data){
            var songInfo = "";
            var currentSong;
            var buttonInfo = $("#moreSongs");
            var getMoreSongs = more.getSongs();

        for (var i = 0; i <= getMoreSongs.length; i++ ) {
        currentSong = getMoreSongs[i];
        

        songInfo += "<div class= 'song-container'>";
        songInfo += "<div class='song-title'><p>" + currentSong.name +" | "+ currentSong.artists + "</p></div>";
        songInfo += "<div class = 'song-info'>";
        songInfo += "<p>" + currentSong.album.name + " | " + currentSong.album.year + "</p>" + "</div>";
        songInfo +=  "</div>";
        buttonInfo.html(songInfo);
        }
        return secondSongList();
        }

});



$('#moreButton').on('click',function(){
  console.log('click');
});



