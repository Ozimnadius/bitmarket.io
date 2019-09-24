// common.js
function Switches(prop) {
    this.sws = document.querySelector(prop.sws);
    this.swsList = document.querySelectorAll(prop.sw);
    this.tabs = document.querySelectorAll(prop.tab);
    this.tabSelector = prop.tab;
    this.tabsContainer = document.querySelector(prop.tabsContainer);
    this.activeTab = prop.activeTab || 0;

    let that = this;

    this.init = function () {
        let $this = that.swsList[that.activeTab],
            id = $this.dataset.id,
            maxH = 0,
            tab = document.querySelector(that.tabSelector + '[data-id="' + id + '"]');


        for (let i = 0; i < that.swsList.length; i++) {
            that.swsList[i].classList.remove('active');
        }

        for (let i = 0; i < that.tabs.length; i++) {
            that.tabs[i].classList.remove('active');
            let height = that.tabs[i].offsetHeight;

            if (maxH < height) {
                maxH = height;
            }
        }

        tab.classList.add('active');
        $this.classList.add('active');
        that.tabsContainer.style.height = maxH + 'px';

    };

    for (let i = 0; i < that.swsList.length; i++) {
        that.swsList[i].addEventListener('click', function (e) {

            let percent = (this.offsetLeft / that.width) * 100,
                id = this.dataset.id,
                tab = document.querySelector(that.tabSelector + '[data-id="' + id + '"]');


            for (let i = 0; i < that.swsList.length; i++) {
                that.swsList[i].classList.remove('active');
            }

            for (let i = 0; i < that.tabs.length; i++) {
                that.tabs[i].classList.remove('active');
            }

            tab.classList.add('active');
            this.classList.add('active');

        });
    }
}

function imageResize(src) {
    $('img').not('.logo__img').attr('src', src);
}
// imageResize('https://loremflickr.com/320/440');

function getNumber(str) {
    return parseInt(str.replace(/\s/g, ''));
}

function number_format(number, decimals, dec_point, thousands_sep) {
    var i, j, kw, kd, km;
    if (isNaN(decimals = Math.abs(decimals))) {
        decimals = 2;
    }
    if (dec_point == undefined) {
        dec_point = ",";
    }
    if (thousands_sep == undefined) {
        thousands_sep = ".";
    }
    i = parseInt(number = (+number || 0).toFixed(decimals)) + "";
    if ((j = i.length) > 3) {
        j = j % 3;
    } else {
        j = 0;
    }
    km = (j ? i.substr(0, j) + thousands_sep : "");
    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
    kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
    return km + kw + kd;
}

const wWidth = $(window).width();

function Timer(timer) {
    this.timer = $(timer);
    this.dayObj = this.timer.find('.timer__item[data-id=days]');
    this.hourObj = this.timer.find('.timer__item[data-id=hours]');
    this.minuteObj = this.timer.find('.timer__item[data-id=minutes]');
    this.secondObj = this.timer.find('.timer__item[data-id=seconds]');
    this.dateEnd = this.timer.data('date');
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;

    let that = this;

    this.getTime = function () {
        let dateNow = new Date(),
            dateEnd = new Date(that.dateEnd),
            dateDiff = new Date(dateEnd - dateNow);
        if (dateEnd > dateNow) {
            that.days = dateDiff.getDate();
            that.hours = dateDiff.getHours();
            that.minutes = dateDiff.getMinutes();
            that.seconds = dateDiff.getSeconds();
        }
    };

    this.tick = function () {
        that.getTime();
        that.dayObj.text(that.days);
        that.hourObj.text(that.hours);
        that.minuteObj.text(that.minutes);
        that.secondObj.text(that.seconds);
    };

    this.start = function () {
        let intervalClock = setInterval(that.tick, 1000);
    }
}

if ($('.timer').length > 0) {
    let timer = new Timer('.timer').start();
}


$('.select').selectize();

$('.cnt__btn').on('click', function (e) {
    let btn = $(this),
        cnt = btn.closest('.cnt'),
        count = cnt.find('.cnt__input'),
        val = count.val();
    if (btn.hasClass('cnt__plus')) {
        val++
    } else {
        if (val > 1) {
            val--
        }
    }
    count.val(val);

    if (btn.hasClass('order__cnt-btn')) {
        calcTotal();
    }
});

//-Корзина
let cart = $('.cart'),
    cartCount = cart.find('.cart__count-val'),
    cartPrice = cart.find('.cart__price-val');

$('.oitem__delete').on('click', function (e) {
    $(this).closest('.oitem').remove();
    calcTotal();
});

function calcTotal() {
    let items = $('.oitem'),
        infoCount = $('.oinfo__left .oinfo__val-val'),
        infoPrice = $('.oinfo__right .oinfo__val-val'),
        totalCount = $('.ototal__item_price .ototal__item-val'),
        totalPrice = $('.ototal__price-val'),
        count = 0,
        total = 0;


    items.each(function (x, i) {
        let item = $(i),
            price = Number(item.data('price')),
            num = Number(item.find('.cnt__input').val()),
            sum = price * num;
        count += num;
        total += sum;
    });

    total = number_format(total, '', '', ' ');

    cartCount.text(count);
    cartPrice.text(total);
    infoCount.text(count + ' ');
    infoPrice.text(total);
    totalCount.text(count + ' шт.');
    totalPrice.text(total);

}

$('.file__input').on('change', function (e) {
    let input = $(this),
        val = input.val(),
        item = input.closest('.file'),
        text = item.find('.file__title'),
        file = val.replace(/\\/g, '/').split('/').pop();
    text.text(file);

});

