//product.js
$(function () {
    let sliderProduct = new Swiper ('.product__container', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.product__slider-next',
            prevEl: '.product__slider-prev',
        },
    });

    if (document.querySelector('.product__sws')) {
        let subSwitches = new Switches({
            sws: '.product__sws',
            sw: '.product__sw',
            tab: '.product__tab',
            tabsContainer: '.product__tabs'
        }).init();
    }

    $('.pacco__btn').on('click', function (e) {
        let btn = $(this),
            wrap = btn.next(),
            btns = $('.pacco__btn').not(btn),
            wraps = $('.pacco__wrapper').not(wrap);

        btns.removeClass('active');
        btn.toggleClass('active');
        wraps.slideUp(300);
        wrap.slideToggle(300);
    });

});