define(function(require){
var $ = require("jquery");


$(".dropdown-toggle").dropdown();

// ========== clicking row functions and styling =============//


// ===== click and highlight ===== //
$('.clickable-row').on('click', function(){
var selected = $(this).hasClass("highlight");
$('.clickable-row').removeClass("highlight");
if(!selected)
$(this).addClass("highlight");
});

// == mouseover and mouseout play button ================== //
$(".aria-play-button").hide();

$(".clickable-row").on('mouseover',function() {
$(this).find("button").show();
//console.log(this);
});

$(".clickable-row").on('mouseout',function() {
$(this).find("button").hide();
});


//======= click row and highlight ===//


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

// ======== collapse nav ==== //
$('.player-container').one('click',function(){
$(".navbar-default").slideToggle('slow');
});
$('header').hover(function(){
$(".navbar-default").show();
}, function(){
$(".navbar-default").hide();
});

// ======== collapse nav ==== //
$('.rating').on('click',function(){
$(this).find('span').toggleClass('glyphicon glyphicon-heart-empty').toggleClass(' glyphicon glyphicon-heart');
});


// ======dropdown Button show selected text ========//
$(".dropdown-menu li a").click(function(){
$(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
$(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});


});

// ======filter========//

$('.findButton').on('click', function() {
console.log("click");
var text2 = $( ".artist-dropdown").text();
//var selectArtist = $( '.artist-dropdown' ).val( text );
var selectArtist = $(".artist-dropdown:selected li a").val();
console.log(text2);
console.log(selectArtist);
});

// ======dropdown Button show selected text ========//
$(".dropdown-menu li a").click(function(){
$(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
$(this).parents(".dropdown").find('.btn').val($(this).data('value'));






});




