requirejs(["dom-access", "populate-songs", "get-more-songs"], 
  function(dom,pop,more){

      pop.setSongs(function(data){
        console.log('data', data);
        var divResponse = $(".actual-songs");
        var songInfo = "";
        var currentSong;

            for (var i = 0; i <= data.length; i++ ) {
           currentSong = data[i];
           
            songInfo += "<div id= 'song-container'>";
            songInfo += "<div id='song-title' class='song-info'><p>" + currentSong.name +" | "+ currentSong.artists + "</p></div>";
            songInfo += "<div id='song-album' class='song-info'><p>" + currentSong.album.name + " | " + currentSong.album.year + "</p>" + "</div>";
            songInfo +=  "<button id='deleteButton' class='btn btn-default btn-xs'>"+ "Delete" + "</button>"+"</div>";
            divResponse.html(songInfo);

             
            }
            
      });

    $('#moreSongs').append('<button class="moreButton btn btn-default btn-sm ">More</button>');

      more.setSongs(function(dataMore){
        

            var buttonInfo = $("#moreSongs");
            var songInfo = "";
            var currentSong;
           
          $('.moreButton').on('click',function(){
              for (var i = 0; i <= dataMore.length; i++ ) {
              currentSong = dataMore[i];
              

              songInfo += "<div class= 'song-container2'>";
              songInfo += "<div class='song-title'><p>" + currentSong.name +" | "+ currentSong.artists + "</p></div>";
              songInfo += "<div class = 'song-info'>";
              songInfo += "<p>" + currentSong.album.name + " | " + currentSong.album.year + "</p>" + "</div>";
              songInfo +=  "<button id='deleteButton2'>"+ "Delete" + "</button>"+"</div>";
              songInfo +=  "</div>";

              buttonInfo.html(songInfo);
            
            }
            
         });   
       });         
});


 $(document).on('click',"#deleteButton",function(){
    $(this).closest('div').remove();
  });

$(document).on('click',"#deleteButton2",function(e){
  console.log(e);
  $(this).closest('div').remove();
});     
