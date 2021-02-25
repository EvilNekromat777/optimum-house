
$('.slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true
 });
 $('.slider2').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true
 });
// =============================================>
//https://jqueryui.com/tabs/

//$(document).ready(function(){
//	$(".layout__button").click(function(){
//		 $(this).toggleClass("active");
//	});
//});

$( function() {
	$( "#selectable" ).selectable();
 } );