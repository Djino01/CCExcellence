$('.phone-mask').mask('+7 (999)999-99-99');

/*Focus*/
if ($(".form__field").length > 0) {
	$('.form__field').on('focus', function () {
		$(this).parent().find('.form__caption').addClass("active");
	});
	$('.form__field').on('blur', function () {
		let email = $(this).val();
		if (email.length == 0) {
			$(this).parent().find('.form__caption').removeClass("active");
		} else {
			$(this).parent().find('.form__caption').addClass("active");
		}
	});
}