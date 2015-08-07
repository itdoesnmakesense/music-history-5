  requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'firebase': '../bower_components/firebase/firebase',
    'lodash':'../bower_components/lodash/lodash.min.js',
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
  ["jquery","firebase","hbs","bootstrap","dom-access","populate-songs","get-more-songs"],
  function($, _firebase,Handlebars,bootstrap,dom,pop,more){

      pop.setSongs(function(data){
        require(['hbs!../templates/songs'], function(songTemplate){
          $("#table-content").html(songTemplate(data));
     
          
          var myFirebaseRef = new Firebase("https://scorching-inferno-1464.firebaseio.com/");
          myFirebaseRef.child("songs").on("value", function(snapshot) {
            console.log(snapshot.val());  
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
              //$("#div-hid").hide();


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
              // $('#div-hid').on('click',function() {
              //  $('.song-art').hasClass('col-md-offset-2');
              //       $('.song-art').removeClass("col-md-offset-2");
              //      // $('.player-container').addClass("col-md-offset-1");
              //     });





              // $(".div-dropdown").on('mouseover',function(){

              //   $("#div-hid").collapse('show');
              // });






              // ======== collapse div for .song-art ==== //
               $('.clickable-row').on('click',function(){
                  $(".song-art").collapse('show','slow');
                  });
               // $(".clickable-row").on('mouseout',function() {
               //        $(".song-art").collapse('hide');
               //          });
               // $(".clickable-row").dblclick(function() {
               //        $(".song-art").css("position","fixed");
               //          });




        });
      });
    });



////////////////////////////////////////
        // for (var i = 0; i <= data.length; i++ ) {
        //   currentSong = data[i];
           
        //   songInfo += "<div id= 'song-container' class='col-md-12 clickable active'>";
        //   songInfo += "<div id='song-title' class='song-info'><p>" + currentSong.name + "</p>";
        //   songInfo += "<p>" + currentSong.artists + " | " + currentSong.album.name + " | " + 
        //               currentSong.album.year + "</p></div>";
        //   songInfo +=  "<button id='deleteButton' class='btn btn-default btn-xs'>"+ 
        //                "<span class='glyphicon glyphicon-option-vertical' aria-hidden='true'></span>" + 
        //                "</button>"+"</div>";
        //   divResponse.html(songInfo);


             
        // }

            
//       });
   // $('#moreSongs').append('<button class=" ghost-button btn btn-primary btn-block btnClick col-md-12" type="button" data-toggle="collapse" data-target="#moreSongs" aria-expanded="false" aria-controls="collapseExample">More</button>');


//       more.setSongs(function(dataMore){
        
        

//             var buttonInfo = $("#moreSongs");
//             var songInfo = "";
//             var currentSong;
           
//           $('.btnClick').on('click',function(){
//               for (var i = 0; i <= dataMore.length; i++ ) {
//               currentSong = dataMore[i];
              
//             songInfo += "<div id= 'song-container2' class='col-md-12'>";
//             songInfo += "<div id='song-title' class='song-info'><p>" + currentSong.name +" | "+ currentSong.artists + "</p></div>";
//             songInfo += "<div id='song-album' class='song-info'><p>" + currentSong.album.name + " | " + currentSong.album.year + "</p>" + "</div>";
//             songInfo +=  "<button id='deleteButton2' class='btn btn-default btn-xs'>"+ "<span class='glyphicon glyphicon-trash' aria-hidden='true'></span>" + "</button>"+"</div>";
//             buttonInfo.html(songInfo);
            
//             }
            
//          });   
//        });         
// });


// ========= delete buttons===============//
//  $(document).on('click',"#deleteButton",function(){
//     $(this).closest('div').remove();
//   });

// $(document).on('click',"#deleteButton2",function(e){
//   console.log(e);
//   $(this).closest('div').remove();
// }); 







// songInfo += "<div id= 'song-container' class='col-md-12 clickable'>";
// songInfo += "<div id='song-title' class='song-info'><p>" + currentSong.name + "</p>";
// songInfo += "<p>" + currentSong.artists + " | " + currentSong.album.name + " | " + 
//             currentSong.album.year + "</p></div>";
// songInfo +=  "<button id='deleteButton' class='btn btn-default btn-xs'>"+ 
//              "<span class='glyphicon glyphicon-option-vertical' aria-hidden='true'></span>" + 
//              "</button>"+"</div>";
// divResponse.html(songInfo);






























