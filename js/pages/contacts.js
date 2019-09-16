/*YANDEX*/
$(function ()   {
    ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init() {

        if ($('#map').length) {
            var center = [55.78638606974644,37.36114605952451];
            // if ($(window).width() < 576) {
            //     center = [55.609501798660396, 37.61325538360591];
            // }

            myMap = new ymaps.Map("map", {
                center: center,
                zoom: 17,
                controls: ['fullscreenControl']
            });


            myMap.behaviors.disable(['scrollZoom']);

            myPin = new ymaps.GeoObjectCollection({}, {});


            myPlacemark1 = new ymaps.Placemark([55.78618656896549,37.36104949999998], {
                    balloonContentHeader: "Qwertysh",
                    balloonContentBody: "Qwertysh",
                    balloonContentFooter: "г. Москва, ул. 2-я Новорублевская, д.13А",
                    hintContent: "Qwertysh.ru"
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/icons/pin.png',
                    iconImageSize: [18, 19],
                    iconImageOffset: [-0, -0]
                });


            myPin.add(myPlacemark1);
            myMap.geoObjects.add(myPin);
        }
    }


    $('.fmap__button').on('click', function (e) {
        myMap.container.enterFullscreen();
    });
});
/*END YANDEX*/