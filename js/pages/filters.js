//index.js
$(function () {
    $('.list__form').on('submit', function (e) {
        e.preventDefault();
    });

    $('.filter__input').on('keypress', function (e) {
        if (e.key.match(/[^0-9]/g) || (this.value == 0 && e.key == 0)) {
            e.preventDefault();
        }

    });

    $('.filter__more').on('click', function (e) {
        let $this = $(this),
            filter = $this.closest('.filter'),
            hidden = filter.find('.filter__hidden');
        $this.toggleClass('open');
        hidden.slideToggle(300);
    });


    //ОБРАБОТЧИКИ ФОРМЫ
    //обработчик изменения фильтров
    $('.filters').on('change', function (e) {

    });

    // обработчик сброса фильтров
    $('.filters__reset').on('click', function (e) {
        $(this).find(':input').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked');
    });

    $('.filters-btn').on('click',function (e) {
        $(this).next().toggleClass('active');
    });
});