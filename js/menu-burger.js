function slideToggleMenu() {
	$('.header__menu-burger').click(function (event) {
		$('.header__menu-burger, .header__menu-list').toggleClass('active');
		$('body').toggleClass('lock');
	});
};

function removeActiveClass() {
	if ($(window).width() >= 769) {
		$('.header__menu-burger, .header__menu-list').removeClass('active');
		$('body').removeClass('lock');
	}
};

$(document).ready(function () {
	slideToggleMenu();
});

$(window).resize(function () {
	removeActiveClass();
});