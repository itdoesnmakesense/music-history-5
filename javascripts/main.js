  requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'firebase': '../bower_components/firebase/firebase',
    'lodash':'../bower_components/lodash/lodash.min',
    'bootstrap-autohideingnavbar':'bower_components/bootstrap-autohidingnavbar/dist/jquery.bootstrap-autohidingnavbar.min.js',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});


requirejs(
  ["jquery","lodash","firebase","hbs","bootstrap","dom-access","populate-songs","get-more-songs"],
  function($, _,firebase,Handlebars,bootstrap,dom,pop,more){

     
          
          var myFirebaseRef = new Firebase("https://scorching-inferno-1464.firebaseio.com/");
          myFirebaseRef.child("songs").on("value", function(snapshot) {
             var playlist = snapshot.val();
             console.log(playlist); 
             var songNameArray= [];
             var artistArray = [];
             var albumArray = [];


                     for (var i in playlist){
                      songNameArray[songNameArray.length]= playlist[i].name;
                      artistArray[artistArray.length] = playlist[i].artists;
                      albumArray[albumArray.length] = playlist[i].album.name;    
                     }
                                      // console.log(songNameArray); 
                                      // console.log(artistArray);  
                                      // console.log(albumArray); 

                              // var songsObj = {'songs': songsArr};
                      var songsObj = {'songs': playlist};
                      console.log(songsObj);
                      
                      var loArtists = _.chain(artistArray).uniq().value();
                      var loAlbums = _.chain(albumArray).uniq().value();

                      loArtistsObj = {'artists': loArtists};
                      loAlbumsObj = {'album': loAlbums};
                                  // console.log(loArtistsObj);
                                  //  console.log(loAlbumsObj);


              require(['hbs!../templates/songs'], function(songTemplate){
                $("#table-content").html(songTemplate(songsObj));
                console.log(songTemplate(songsObj))
                  });
            
              require(['hbs!../templates/artist'], function(artistTemplate) {
                $("#artists").append(artistTemplate(loArtists));
                console.log(artistTemplate(loArtistsObj))
                });

              require(['hbs!../templates/album'], function(albumTemplate) {
                $("#album").append(albumTemplate(loAlbums));  
                console.log(albumTemplate(loAlbumsObj))    
                });

// ====== filtering left container artists/albums with lodash ========//






// ======some shit to get the dropdown buttons working. idk, man, idk========//

$(".dropdown-toggle").dropdown();

// ======dropdown Button show selected text ========//
$(".dropdown-menu li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});

// ======jquery styling ========//

       // ========== clicking row functions and styling =============//


              // ===== click and highlight ===== //
          $('.clickable-row').on('click',function() {
                var selected = $(this).hasClass("highlight");
                  $('.clickable-row').removeClass("highlight");
                   if(!selected)
                    $(this).addClass("highlight");
                     });

            // == mouseover and mouseout play button ================== //
              $(".aria-play-button").hide();

              $(".clickable-row").on('mouseover',function() {
                   $(this).find("button").show();
                     console.log(this);
                     });

              $(".clickable-row").on('mouseout',function() {
                      $(this).find("button").hide();
                        });


              //======= supposed to hide dropdown div NOT WORKING ===//


              $('.clickable-row').on('click',function() {
                $('#div-hid').hasClass("col-md-12");
                  $('#div-hid').removeClass("col-md-12 hidden");
                    $('#div-hid').addClass("col-md-3 inside-full-height effect1 fadein highlight");
                      console.log(this);
                     });
              $('.clickable-row').on('click',function() {
               $('.player-container').hasClass('col-md-offset-2');
                    $('.player-container').removeClass("col-md-offset-2");
                   // $('.player-container').addClass("col-md-offset-1");
                  });

              // ======== collapse div for .song-art ==== //
               $('.clickable-row').on('click',function(){
                  $(".song-art").collapse('show','slow');
                  });




    });
});











