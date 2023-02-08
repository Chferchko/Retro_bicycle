$(window).scroll(function (event) {
	var h = $(this).scrollTop() / 3;
	$('.intro').css('background-position-y', - h + 'px');
});