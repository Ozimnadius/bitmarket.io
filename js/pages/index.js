//index.js
$(function () {

    $('.menu-link').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });

    $('.menu__more').on('click', function (e) {
        e.stopPropagation();

        let $this = $(this),
            menu = $this.closest('.menu'),
            hidden = menu.find('.menu__hidden');
        $this.toggleClass('open');
        hidden.slideToggle(300);

    });
});