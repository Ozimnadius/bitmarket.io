//compare.js
$(function () {
    $('.cchars__btn').on('click', function (e) {
        let btn = $(this),
            chars = btn.closest('.cchars'),
            bottom = chars.find('.cchars__bottom'),
            height = bottom.find('.cchars__wrap').outerHeight();

        if (bottom.css('height') == '0px') {
            bottom.animate({
                height: height
            }, 300);
        } else {
            bottom.animate({
                height: 0
            }, 300);
        }

        btn.toggleClass('open');

    });

    $('.compare__switch-btn').on('click', function (e) {
        let btn = $(this),
            items = $('.same'),
            chars = $('.cchars');

        items.toggleClass('disabled');
        btn.toggleClass('active');
        chars.each(function (x, i) {
            let $this = $(i),
                bottom = $this.find('.cchars__bottom'),
                height = bottom.find('.cchars__wrap').outerHeight();
            if (bottom.css('height') != '0px') {
                bottom.css({
                    height: height
                });
            }
        });




    });
});