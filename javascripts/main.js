  requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': ['jquery']
  }
});





requirejs(
  ["jquery","hbs","bootstrap","dom-access","populate-songs","get-more-songs"],
  function($,Handlebars,bootstrap,dom,pop,more){

      pop.setSongs(function(data){
        require(['hbs!../templates/songs'], function(songTemplate){
         // console.log(songTemplate(data));
          $("#table-idea").html(songTemplate(data));
          // console.log(data);



// ========== clicking row functions and styling =============//


              // ===== click and highlight ===== //
          $('.clickable-row').on('click',function() {
                var selected = $(this).hasClass("highlight");
                  $('.clickable-row').removeClass("highlight");
                   if(!selected)
                    $(this).addClass("highlight");
                     });

            // == mouseover and mouseout ================== //
              $(".aria-play-button").hide();

              $(".clickable-row").on('mouseover',function() {
                   $(this).find("button").show();
                     console.log(this);
                     });

              $(".clickable-row").on('mouseout',function() {
                      $(this).find("button").hide();
                        });

              $("#hid-div").hide();

              $(".div-dropdown").on('mouseover',function(e){
                console.log(e);
                  $(this).find("#hid-div").toggle("slide");
                  console.log(this);
              });

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
   $('#moreSongs').append('<button class=" ghost-button btn btn-primary btn-block btnClick col-md-12" type="button" data-toggle="collapse" data-target="#moreSongs" aria-expanded="false" aria-controls="collapseExample">More</button>');


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
 $(document).on('click',"#deleteButton",function(){
    $(this).closest('div').remove();
  });

$(document).on('click',"#deleteButton2",function(e){
  console.log(e);
  $(this).closest('div').remove();
}); 







// songInfo += "<div id= 'song-container' class='col-md-12 clickable'>";
// songInfo += "<div id='song-title' class='song-info'><p>" + currentSong.name + "</p>";
// songInfo += "<p>" + currentSong.artists + " | " + currentSong.album.name + " | " + 
//             currentSong.album.year + "</p></div>";
// songInfo +=  "<button id='deleteButton' class='btn btn-default btn-xs'>"+ 
//              "<span class='glyphicon glyphicon-option-vertical' aria-hidden='true'></span>" + 
//              "</button>"+"</div>";
// divResponse.html(songInfo);






























