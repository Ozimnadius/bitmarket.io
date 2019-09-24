//favorites.js
$(function () {

    function calcFavorites(list) {
        let items = list.find('.fitem'),
            price = list.find('.flist__price-val'),
            total = 0;

        items.each(function (x,i) {
            let item = $(i),
                val = Number(item.data('price'));
            total+=val;
        });

        total = number_format(total,'','','.');
        price.text(total);
    }

    $('.fitem__delete').on('click', function (e) {
        let $this = $(this),
            item = $this.closest('.fitem'),
            list = item.closest('.flist');

        item.remove();
        calcFavorites(list);
    });


});