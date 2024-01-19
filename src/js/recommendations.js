document.addEventListener("DOMContentLoaded", function() {
    // Получаем все элементы с классом "recommendations__tab"
    var tabElements = document.querySelectorAll(".recommendations__tab");

    // Добавляем обработчик клика на каждый элемент
    tabElements.forEach(function(tabElement) {
        tabElement.addEventListener("click", function() {
            // Удаляем класс "active" со всех элементов "recommendations__tab"
            tabElements.forEach(function(tab) {
                tab.classList.remove("active");
            });

            // Добавляем класс "active" к текущему элементу "recommendations__tab"
            tabElement.classList.add("active");

            // Получаем значение атрибута "data-recommendations" текущего элемента "recommendations__tab"
            var recommendationsId = tabElement.getAttribute("data-recommendations");

            // Получаем все элементы с классом "recommendations__block"
            var blockElements = document.querySelectorAll(".recommendations__block");

            // Удаляем класс "active" со всех элементов "recommendations__block"
            blockElements.forEach(function(block) {
                block.classList.remove("active");
            });

            // Добавляем класс "active" к элементу "recommendations__block" с соответствующим значением "data-recommendations-block"
            var blockElement = document.querySelector('.recommendations__block[data-recommendations-block="' + recommendationsId + '"]');
            blockElement.classList.add("active");
        });
    });
});

$(".recommendations__btn").on("click", function(){
	var elementClick = $(this).attr("href")
	var destination = $(elementClick).offset().top - 80;
	jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 600);
});
