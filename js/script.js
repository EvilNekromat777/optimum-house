
$('.slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true
 });
// $('.slider2').slick({
//	dots: true,
//	infinite: true,
//	speed: 300,
//	slidesToShow: 1,
//	adaptiveHeight: true
// });
// =============================================>
//https://jqueryui.com/tabs/

$( function() {
	$( "#selectable" ).selectable();
 } );

// =============================================>
 //Скрыть placeholder при клике
$(document).ready(function () {
	$('input').focus(function () {
		$(this).data('placeholder', $(this).attr('placeholder'))
		$(this).attr('placeholder', '');
	});
	$('input').blur(function () {
		$(this).attr('placeholder', $(this).data('placeholder'));
	});
});