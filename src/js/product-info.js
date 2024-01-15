if ($(".product-info").length > 0) {
	$('.product-info__slick').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: false,
		autoplaySpeed: 2000,
	});
	$('.product-info__arrow.product-info__arrow_prew').on("click", function(event) {
		$(this).parents('.product-info__wrap').find('.product-info__slick').slick('slickPrev');
	});
	$('.product-info__arrow.product-info__arrow_next').on("click", function(event) {
		$(this).parents('.product-info__wrap').find('.product-info__slick').slick('slickNext');
	});
}