requirejs(["dom-access", "populate-songs", "get-more-songs"], 
  function(dom,pop,more){

      pop.setSongs();
    

      more.setSongs();

      // function firstSongList(data) {
        var divResponse = $(".actual-songs");
        var songInfo = "";
        var currentSong;
        var popSongs = pop.getSongs();

            for (var i = 0; i <= popSongs.length; i++ ) {
            currentSong = popSongs[i];
           
            songInfo += "<div id= 'song-container'>";
            songInfo += "<div id='song-title' class='song-info'><p>" + currentSong.name +" | "+ currentSong.artists + "</p></div>";
            songInfo += "<div id='song-album' class='song-info'><p>" + currentSong.album.name + " | " + currentSong.album.year + "</p>" + "</div>";
            songInfo +=  "<button class='deleteButton'>"+ "Delete" + "</button>"+"</div>";
            divResponse.html(songInfo);

              $('button').click(function(){
              $(this).closest('#song-container').remove();
              });
            }
          // }
    // return firstSongList();

      
          // function secondSongList(data){

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

                $('button').click(function(){
                $(this).closest('#song-container').remove();
                });
              }

              
            });

            // }

      // return secondSongList();
// $('#moreButton').on('click',function(){
//                 console.log('click');
//                 return secondSongList();
//                 console.log(secondSongList());
//                  });

 // $('#moreButton').on('click',function(){
 //    return getMoreSongs;
 //  });

// $('#moreButton').on('click',function(){
//   return secondSongList();
// });



