// common.js
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