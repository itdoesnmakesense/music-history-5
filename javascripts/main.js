  requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'firebase': '../bower_components/firebase/firebase',
    'lodash':'../bower_components/lodash/lodash.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../bower_components/q/q'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }

  }
});


requirejs(
  ["jquery","lodash","firebase","dependencies","dom-access","q","get-q-songs","get-more-q-songs","load_data","add", "authentication"],
  function($, _,firebase,dependencies,dom, Q, getSongs, getMoreSongs, loadData, added, auth){

            // Detect if the user is already logged in
            var ref = new Firebase("https://scorching-inferno-1464.firebaseio.com");
            var authData = ref.getAuth();

            console.log(authData);
            //if there is no token key on the authData object, authenticate with 
            //Github Auth
            if(authData === null){
            ref.authWithOAuthPopup("github", function(error, authData) {
            if (error) {
            console.log("Login Failed!", error);
            } else {
            console.log("Authenticated successfully with payload:", authData);
            auth.setUid(authData.uid);
            //require(["load_data"],function(){});
            
            }
            });

            //Uswer alreddy authenticated ,store uid and show data
          } else {
            auth.setUid(authData.uid);
          }

        });

          // var myFirebaseRef = new Firebase("https://scorching-inferno-1464.firebaseio.com/");
          // var currentUser = auth.getUid();
          //  myFirebaseRef.child("songs").orderByChild("uid").equalTo(currentUser).on("value", function(snapshot) { });

              // $('#add-button').on('click',function(){
              //       var newSong = {
              //           "name" : $('#addSong').val(),
              //           "artists" : $('#addArtist').val(),
              //           "album" : {
              //           "name" : $('#addAlbum').val(),
              //           },
              //           "uid": auth.getUid()

              //           };
              //   added(newSong);
              // });



          
        
         