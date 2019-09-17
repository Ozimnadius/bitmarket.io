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

    let slider = new Swiper ('.ibanner__container', {
        loop: true,
        pagination: {
            el: '.ibanner__pag',
            clickable: true
        }
    });

    $('.menu__link').on('click', function (e) {
        e.stopPropagation();

        if (wWidth<1500) {
            e.preventDefault();
            let $this = $(this),
                item = $this.closest('.menu__item'),
                items = $('.menu__item').not(item);

            items.removeClass('active');
            item.toggleClass('active');
        }
    });

    $('.submenu__item').on('click', function (e) {
        e.stopPropagation();
    });

});