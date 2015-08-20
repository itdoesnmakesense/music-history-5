define(function(require){

  var firebase = require("firebase");
  var $ = require("jquery");
  var templates = require("get-templates");
  var auth = require("authentication");
  var added = require("add");
                    
             // var artistArray = [];
             // var albumArray = [];
             // var allSongsArray = [];


                     // for (var i in playlist){
                     //  allSongsArray[allSongsArray.length]= playlist[i];
                    
                     //  artistArray[artistArray.length] = playlist[i].artists;
                     //  albumArray[albumArray.length] = playlist[i].album.name;    
                     // }
                     //                  //  console.log(allSongsArray); 
                     //                  // console.log(songNameArray); 
                     //                    console.log(artistArray);  
                     //                  // console.log(albumArray); 

                     //          // var songsObj = {'songs': songsArr};
                     //  var songsObj = {'songs': playlist};
                     //  // console.log(songsObj);
                      
                     //  var loArtists = _.chain(allSongsArray).uniq('artists').pluck('artists').value();
                     //  var loAlbums = _.chain(allSongsArray).uniq('album').pluck('album').value();
                     //  // console.log(loAlbums);
                     //  loArtistsObj = {'artists': loArtists};
                     //  loAlbumsObj = {'album': loAlbums};
                     //              console.log(loArtistsObj);
                     //            // console.log(loAlbumsObj);


          var myFirebaseRef = new Firebase("https://scorching-inferno-1464.firebaseio.com/");
                myFirebaseRef.child("songs").on("value", function(snapshot) {
                  var song_list = snapshot.val();
                    //console.log("song_list",song_list);



                  var populatedTemplate = templates.songsTpl(song_list);
                  //insert the DOM string into the appropriate element
                    $("#table-content").html(populatedTemplate);
                      //console.log(populatedTemplate);
                      require(["styling"],function(){});

                  });

                myFirebaseRef.orderByChild("artists").on("child_added", function(snapshot) {
                  var artists_list = snapshot.val();

                    console.log("artists_list", artists_list);
                  var artistTemplate = templates.artistTpl(artists_list);
                  
                  //insert the DOM string into the appropriate element
                  $("#artists").html(artistTemplate);
                      console.log(artistTemplate);
                       require(["styling"],function(){});



                      
                  });

                myFirebaseRef.child("songs").orderByChild("album").on("value", function(snapshot) {
                  var album_list = snapshot.val();
                    //console.log("artists_list",artists_list);

                  var albumTemplate = templates.albumTpl(album_list);
                  //insert the DOM string into the appropriate element
                    $("#album").html(albumTemplate);
                      console.log(albumTemplate);
                       require(["styling"],function(){});
                            

                  });


$('#add-button').on('click',function(){
  console.log("click");
                    var newSong = {
                        "name" : $('#addSong').val(),
                        "artists" : $('#addArtist').val(),
                        "album" : {
                        "name" : $('#addAlbum').val(),
                        },
                        "uid": auth.getUid()

                        };
                added(newSong);
              });

});






