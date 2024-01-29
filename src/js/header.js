/*Header scroll*/
function scrollHeader() {
	if ($(window).scrollTop() > 5) {
		$('.header').addClass('active');
	} else {
		$('.header').removeClass('active');
	}
}
scrollHeader();
$(window).on("scroll", function () {
	scrollHeader();
});

// Main menu open
if ($('.header__burger').length > 0) {
    $('.header__burger').on("click", function (event) {
		$(this).toggleClass('active');
		$('body').toggleClass('lock');
		$('.header__container').toggleClass('active');
    });
	$(".header__container a").on("click", function(){
		$(".header__burger").removeClass('active');
		$('body').removeClass('lock');
		$('.header__container').removeClass('active');
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top - 80;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 600);
	});
}

$(".menu-item-has-children>a").on("click", function(e){
	e.preventDefault();
});