window.onload = function(e) {

    // подстветка активной страницы
    var links = document.querySelectorAll(".site-list__link");
    var pageCurrent = document.location.pathname.substr(8);

    for (i = 0; i < links.length; i++) {

        if (links[i].getAttribute("href") == pageCurrent) {
            links[i].classList.add("site-list__link--active");
        }
    }
    // меню мобильная версия
    var btnOpen = document.querySelector('.main-nav__open');
    var menu = document.querySelector('.main-nav');


    btnOpen.addEventListener("click", function(e) {
        menu.classList.toggle("main-nav__show");
        btnOpen.classList.toggle("main-nav__open--op");
    });

    // модальное окно
    var popupSearch = document.querySelector(".search-form ");
    var searchButton = document.querySelector(".search .search__button");

    searchButton.addEventListener('click', function(evt) {
        evt.preventDefault();
        popupSearch.classList.toggle("modal-show");

    });
}