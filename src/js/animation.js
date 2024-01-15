if ($('.promo').length > 0) {
	const promoVideo = document.querySelector('.promo__video');
	const chat = document.querySelector('.chat');
	
	// Получаем высоту блока container
	const container = document.querySelector('.container');
	const containerHeight = container.clientHeight;
	
	// Функция для определения значения y в зависимости от ширины экрана
	function getYValue() {
		// Получаем текущую ширину экрана
		const screenWidth = window.innerWidth;
	
		// Если ширина больше 741px, используем 125%, в противном случае 180%
		return screenWidth > 741 ? '220%' : '340%';
	}
	
	function getTopValue() {
		// Получаем текущую ширину экрана
		const screenTopWidth = window.innerWidth;
	
		// Если ширина больше 741px, используем 125%, в противном случае 180%
		return screenTopWidth > 741 ? '80%' : '120%';
	}
	
	// Создаем анимацию с GSAP с динамическим значением y
	gsap.to(promoVideo, {
		y: getYValue(), // Используем функцию для определения значения y
		duration: 2, // Продолжительность анимации (в секундах)
		ease: 'power2.inOut', // Легкость анимации
		scrollTrigger: {
			trigger: '.container', // Этот блок запускает анимацию
			start: 'top ' + getTopValue(), // Начало анимации при достижении верхней границы контейнера
			end: 'bottom bottom', // Конец анимации при достижении нижней границы контейнера
			scrub: true, // Связывает анимацию со скроллом
		},
	});
	
	// Обработчик изменения размера окна
	window.addEventListener('resize', () => {
		// При изменении размера окна обновляем значение y
		const newYValue = getYValue();
		gsap.to(promoVideo, { y: newYValue, duration: 0.1 });
	});
}

if ($('.assistents').length > 0) {
	const assistentIcon = document.querySelector('.assistents__icon');
	function getYValueAsist() {
		// Получаем текущую ширину экрана
		const screenTopWidth = window.innerWidth;
	
		// Если ширина больше 741px, используем 125%, в противном случае 180%
		if (screenTopWidth > 992) {
			return '70%';
		} else if (screenTopWidth > 741) {
			return '140%';
		} else {
			return '200%';
		}
	}
	function getTopValueAsist() {
		// Получаем текущую ширину экрана
		const screenTopWidth = window.innerWidth;
	
		// Если ширина больше 741px, используем 125%, в противном случае 180%
		return screenTopWidth > 741 ? '10%' : '0%';
	}
	gsap.to(assistentIcon, {
		y: getYValueAsist(), // Используем функцию для определения значения y
		duration: 8, // Продолжительность анимации (в секундах)
		ease: 'power2.inOut', // Легкость анимации
		scrollTrigger: {
			trigger: '.assistents', // Этот блок запускает анимацию
			start: 'top 0%' + getTopValueAsist(), // Начало анимации при достижении верхней границы контейнера
			end: 'bottom 80%', // Конец анимации при достижении нижней границы контейнера
			scrub: true, // Связывает анимацию со скроллом
		},
	});
}

function handleResize() {
	if (window.innerWidth > 992) {
		function getYValueOffer() {
			const screenWidth = window.innerWidth;
			return screenWidth > 1199 ? '80%' : '60%';
		}
		if ($('.product-offer').length > 0) {
			gsap.to(".product-offer__img", {
			scrollTrigger: {
				trigger: ".product-offer__body",
				scrub: true,
				pin: false,
				start: "top top",
				end: "bottom 80%",
			},
			ease: "power2.inOut",
			y: getYValueOffer(),
			duration: 20,
			});
		}
	} else {
		gsap.killTweensOf(".product-offer__img");
	}
}
handleResize();
window.addEventListener("resize", handleResize);
