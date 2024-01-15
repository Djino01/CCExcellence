if ($(".article").length > 0) {
	var swiper = new Swiper(".article__swiper", {
		slidesPerView: 3,
		spaceBetween: 32,
		breakpoints: {
			10: {
				slidesPerView: 1.28,
				spaceBetween: 24,
			},
			700: {
				slidesPerView: 1.8,
				spaceBetween: 24,
			},
			700: {
				slidesPerView: 2.1,
				spaceBetween: 24,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 32,
			},
		},
	});
}