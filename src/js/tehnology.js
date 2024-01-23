if ($('.tehnology').length > 0) {
// Получаем элемент с классом 'technology-bg'
const bgElement = document.querySelector('.tehnology__bg');

// Функция, которая обновляет свойство transform в зависимости от позиции скролла
const onScroll = () => {
  // Получаем элемент с классом 'tehnology'
  const techElement = document.querySelector('.tehnology__body');  
  // Позиция начала блока 'technology' относительно верха страницы
  const techTop = techElement.getBoundingClientRect().top + window.scrollY;
  
  // Получаем позицию скролла страницы
  const scrollPosition = window.scrollY;

  // Вычисляем сдвижение только когда скролл находится в пределах блока 'technology'
  if (scrollPosition >= techTop) {
    // Как сильно элемент должен сдвинуться зависит от разницы текущей позиции скролла
    // и позиции начала блока 'technology' на странице
    const translateValue = (scrollPosition - techTop) * 0.5;

    // Обновляем стиль transform для создания эффекта параллакса при прокрутке
    bgElement.style.transform = `translateY(-${translateValue}px)`;
  }
};

// Добавляем обработчик события на прокрутку страницы
window.addEventListener('scroll', onScroll);
}