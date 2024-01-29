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
		//return screenWidth > 741 ? '320%' : '340%';
		if (screenWidth > 992) {
			return '320%';
		} else if (screenWidth > 741) {
			return '240%';
		} else {
			return '560%';
		}
	}
	
	function getTopValue() {
		// Получаем текущую ширину экрана
		const screenTopWidth = window.innerWidth;
	
		// Если ширина больше 741px, используем 125%, в противном случае 180%
		return screenTopWidth > 741 ? '10%' : '0%';
	}
	
	// Создаем анимацию с GSAP с динамическим значением y
	gsap.to(promoVideo, {
		y: getYValue(), // Используем функцию для определения значения y
		duration: 4, // Продолжительность анимации (в секундах)
		ease: 'none', // Легкость анимации
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
document.addEventListener("DOMContentLoaded", function () {
    const assistents = document.querySelector(".assistents");
    const assistentsIcon = document.querySelector(".assistents__icon");

    function handleResize() {
		// Получаем ширину экрана
        let windowWidth = window.innerWidth;
		let assistentsTop;

        // Устанавливаем значение в зависимости от ширины экрана
        if (windowWidth > 992) {
            assistentsTop = 400;
        } else if (windowWidth > 740) {
            assistentsTop = 280;
        } else {
            assistentsTop = 480;
        }
      const assistentsHeight = assistents.clientHeight - assistentsTop;

        // Создаем анимацию
        const imgAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: assistents,
            start: "top top",
            end: "bottom center",
            scrub: true,
          },
        });

        // Используем высоту родительского блока для вычисления значения y
        imgAnimation.to(assistentsIcon, {
          y: assistentsHeight,
        });
    }

    // Вызываем функцию при загрузке страницы
    handleResize();

    // Добавляем обработчик события на изменение размера окна
    window.addEventListener("resize", handleResize);
  });
}

if ($('.product-scroll').length > 0) {
document.addEventListener("DOMContentLoaded", function () {
    const productOffer = document.querySelector(".product-scroll");
    const img = document.querySelector(".product-offer__img");

    function handleResize() {
      // Проверяем ширину экрана
      if (window.innerWidth > 992) {
        // Получаем высоту родительского блока
        const parentHeight = productOffer.clientHeight - 206;

        // Создаем анимацию
        const imgAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: productOffer,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        });

        // Используем высоту родительского блока для вычисления значения y
        imgAnimation.to(img, {
          y: parentHeight,
        });
      }
    }

    // Вызываем функцию при загрузке страницы
    handleResize();

    // Добавляем обработчик события на изменение размера окна
    window.addEventListener("resize", handleResize);
  });
}
