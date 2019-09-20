//index.js
$(function () {

    let sliderNewItems = new Swiper ('.new-items .slider__container', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.new-items .slider__next',
            prevEl: '.new-items .slider__prev',
        },
        breakpoints: {
            // when window width is <= 767.99px
            767.99: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is <= 1499.99px
            1499.99: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    let sliderPopular = new Swiper ('.ipopular .slider__container', {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerColumn: 2,
        navigation: {
            nextEl: '.ipopular .slider__next',
            prevEl: '.ipopular .slider__prev',
        },
        breakpoints: {
            // when window width is <= 767.99px
            767.99: {
                slidesPerView: 1,
                slidesPerColumn: 4,
                spaceBetween: 20
            },
            // when window width is <= 1499.99px
            1499.99: {
                slidesPerView: 2,
                slidesPerColumn: 3,
                spaceBetween: 30
            }
        }
    });

    let sliderSale = new Swiper ('.isale .slider__container', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.isale .slider__next',
            prevEl: '.isale .slider__prev',
        },
        breakpoints: {
            // when window width is <= 767.99px
            767.99: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is <= 1499.99px
            1499.99: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    let sliderBrands = new Swiper ('.ibrands .slider__container', {
        slidesPerView: 5,
        spaceBetween: 30,
        navigation: {
            nextEl: '.ibrands .slider__next',
            prevEl: '.ibrands .slider__prev',
        },
        breakpoints: {
            // when window width is <= 767.99px
            767.99: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is <= 1499.99px
            1499.99: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    let sliderBefore = new Swiper ('.before .slider__container', {
        slidesPerView: 5,
        spaceBetween: 30,
        navigation: {
            nextEl: '.before .slider__next',
            prevEl: '.before .slider__prev',
        },
        breakpoints: {
            // when window width is <= 767.99px
            767.99: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is <= 1499.99px
            1499.99: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    let sliderSame = new Swiper ('.psame .slider__container', {
        slidesPerView: 5,
        spaceBetween: 30,
        navigation: {
            nextEl: '.psame .slider__next',
            prevEl: '.psame .slider__prev',
        },
        breakpoints: {
            // when window width is <= 767.99px
            767.99: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is <= 1499.99px
            1499.99: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
});