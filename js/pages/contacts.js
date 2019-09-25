/*YANDEX*/
$(function ()   {
    ymaps.ready(init);

    var myMap,
        myMap2,
        myPin,
        myPin2,
        myPlacemark,
        myPlacemark2;

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
            if (wWidth<768) {
                myMap.behaviors.disable('drag');
            }

            myPin = new ymaps.GeoObjectCollection({}, {});


            myPlacemark = new ymaps.Placemark([55.78618656896549,37.36104949999998], {
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


            myPin.add(myPlacemark);
            myMap.geoObjects.add(myPin);
        }

        if ($('#map2').length) {
            var center2 = [55.78638606974644,37.36114605952451];
            // if ($(window).width() < 576) {
            //     center = [55.609501798660396, 37.61325538360591];
            // }

            myMap2 = new ymaps.Map("map2", {
                center: center2,
                zoom: 17,
                controls: ['fullscreenControl']
            });


            myMap2.behaviors.disable(['scrollZoom']);
            if (wWidth<768) {
                myMap2.behaviors.disable('drag');
            }

            myPin2 = new ymaps.GeoObjectCollection({}, {});


            myPlacemark2 = new ymaps.Placemark([55.78618656896549,37.36104949999998], {
                    balloonContentHeader: "Qwertysh",
                    balloonContentBody: "Qwertysh",
                    balloonContentFooter: "г. Москва, ул. 2-я Новорублевская, д.13А",
                    hintContent: "Qwertysh.ru"
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'images/icons/pin.svg',
                    iconImageSize: [137, 48],
                    iconImageOffset: [-70, -25]
                });


            myPin2.add(myPlacemark2);
            myMap2.geoObjects.add(myPin2);
        }
    }



    $('.fmap__button').on('click', function (e) {
        myMap.container.enterFullscreen();
    });
});
/*END YANDEX*/