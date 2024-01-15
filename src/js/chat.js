document.addEventListener("DOMContentLoaded", function() {
    // Получаем все элементы с классом "chat__tab"
    var tabElements = document.querySelectorAll(".chat__tab");

    // Добавляем обработчик клика на каждый элемент
    tabElements.forEach(function(tabElement) {
        tabElement.addEventListener("click", function() {
            // Удаляем класс "active" со всех элементов "chat__tab"
            tabElements.forEach(function(tab) {
                tab.classList.remove("active");
            });

            // Добавляем класс "active" к текущему элементу "chat__tab"
            tabElement.classList.add("active");

            // Получаем значение атрибута "data-chat" текущего элемента "chat__tab"
            var chatId = tabElement.getAttribute("data-chat");

            // Получаем все элементы с классом "chat__block"
            var blockElements = document.querySelectorAll(".chat__block");

            // Удаляем класс "active" со всех элементов "chat__block"
            blockElements.forEach(function(block) {
                block.classList.remove("active");
            });

            // Добавляем класс "active" к элементу "chat__block" с соответствующим значением "data-chat-block"
            var blockElement = document.querySelector('.chat__block[data-chat-block="' + chatId + '"]');
            blockElement.classList.add("active");
        });
    });
});

$(".chat__btn").on("click", function(){
	var elementClick = $(this).attr("href")
	var destination = $(elementClick).offset().top - 80;
	jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 600);
});
