<?php
header('Content-Type: application/json');

$data = $_POST;
$action = $data['action'];
switch ($action) {
    case 'callorderSubmit':
        echo json_encode(array(
            'status' => true,
            'html' => '<div class="callorder__success">Спасибо мы скоро с Вами свяжемся.</div>'
        ));
        exit();
        break;
    case 'quickview':
        echo json_encode(array(
            'status' => true,
            'html' => fastbuy()
        ));
        exit();
        break;

    default:
        echo json_encode(array(
            'status' => false,
        ));
        exit();
        break;
}

function fastbuy()
{
    ob_start();
    ?>
    <div class="fbuy">
        <div class="fbuy__top">
            <div class="fbuy__title">Видеокарта AMD (ATI) Radeon RX 570 Sapphire Pulse PCI-E 8192Mb</div>
            <button class="fbuy__close" type="button">
                <svg class="fbuy__close-svg">
                    <use xlink:href="/images/icons/sprite.svg#close"></use>
                </svg>
            </button>
        </div>
        <div class="fbuy__bottom">
            <div class="fbuy__left">
                <div class="fbuy__left-top">
                    <div class="product__slider fbuy__slider">
                        <div class="swiper-container fbuy__container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide product__slide fbuy__slide">
                                    <!--+image('images/content/products/brand.png','lorem','product__slide-brand')--><img
                                            class="product__slide-img" src="images/content/products/image_3.jpg"
                                            alt="lorem">
                                </div>
                                <div class="swiper-slide product__slide fbuy__slide">
                                    <!--+image('images/content/products/brand.png','lorem','product__slide-brand')--><img
                                            class="product__slide-img" src="images/content/products/image_3.jpg"
                                            alt="lorem">
                                </div>
                                <div class="swiper-slide product__slide fbuy__slide">
                                    <!--+image('images/content/products/brand.png','lorem','product__slide-brand')--><img
                                            class="product__slide-img" src="images/content/products/image_3.jpg"
                                            alt="lorem">
                                </div>
                            </div>
                        </div>
                        <div class="product__slider-nav fbuy__slider-prev"><img class=".product__slider-img"
                                                                                src="images/icons/prev.png" alt="lorem">
                        </div>
                        <div class="product__slider-nav fbuy__slider-next"><img class=".product__slider-img"
                                                                                src="images/icons/next.png" alt="lorem">
                        </div>
                    </div>
                    <div class="fbuy__adds"><a class="fbuy__add" href="cabinet.html">
                            <svg class="fbuy__add-svg">
                                <use xlink:href="/images/icons/sprite.svg#recycle"></use>
                            </svg>
                        </a><a class="fbuy__add" href="cabinet.html">
                            <svg class="fbuy__add-svg">
                                <use xlink:href="/images/icons/sprite.svg#heart"></use>
                            </svg>
                        </a></div>
                </div>
                <div class="fbuy__left-bottom">
                    <div class="fbuy__price">
                        <div class="product__price">
                            <div class="product__price-title">Стоимость товара:</div>
                            <div class="product__price-price">
                                <div class="product__price-val">254 040</div>
                                <div class="product__price-cur">руб.</div>
                            </div>
                        </div>
                        <div class="product__rating">
                            <div class="product__stars">
                                <div class="product__star active">
                                    <svg class="product__star-svg">
                                        <use xlink:href="/images/icons/sprite.svg#star"></use>
                                    </svg>
                                </div>
                                <div class="product__star active">
                                    <svg class="product__star-svg">
                                        <use xlink:href="/images/icons/sprite.svg#star"></use>
                                    </svg>
                                </div>
                                <div class="product__star active">
                                    <svg class="product__star-svg">
                                        <use xlink:href="/images/icons/sprite.svg#star"></use>
                                    </svg>
                                </div>
                                <div class="product__star active">
                                    <svg class="product__star-svg">
                                        <use xlink:href="/images/icons/sprite.svg#star"></use>
                                    </svg>
                                </div>
                                <div class="product__star">
                                    <svg class="product__star-svg">
                                        <use xlink:href="/images/icons/sprite.svg#star"></use>
                                    </svg>
                                </div>
                            </div>
                            <div class="product__rating-count">(12)</div>
                        </div>
                    </div>
                    <!-- Если есть в наличии  -->
                    <div class="fbuy__btns">
                        <div class="fbuy__btns-wrap">
                            <div class="product__count">
                                <div class="cnt cnt_small">
                                    <button class="cnt__btn cnt__minus" type="button">
                                        <svg class="cnt__svg">
                                            <use xlink:href="/images/icons/sprite.svg#minus"></use>
                                        </svg>
                                    </button>
                                    <input class="cnt__input" type="text" name="count" value="1" readonly>
                                    <button class="cnt__btn cnt__plus" type="button">
                                        <svg class="cnt__svg">
                                            <use xlink:href="/images/icons/sprite.svg#plus"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <button class="btn btn_r jsItemBuy fbuy__buy" type="button">
                                <svg class="fbuy__buy-svg">
                                    <use xlink:href="/images/icons/sprite.svg#cart"></use>
                                </svg>
                            </button>
                            <button class="btn btn_w fbuy__one jsItemOne" type="button">Купить в 1 клик</button>
                        </div>
                    </div>
                    <!-- Если нет в наличии -->
<!--                    <div class="fbuy__notanabled">Временно нет в наличии</div>-->
                </div>
            </div>
            <div class="fbuy__right">
                <div class="fbuy__chars">
                    <div class="fbuy__chars-title">Характеристики</div>
                    <div class="fbuy__chars-list">
                        <div class="product__list">
                            <div class="product__item">
                                <div class="product__item-name">Гарантия:</div>
                                <div class="product__item-val">36 мес.</div>
                            </div>
                            <div class="product__item">
                                <div class="product__item-name">Страна-производитель:</div>
                                <div class="product__item-val">Китай</div>
                            </div>
                            <div class="product__item">
                                <div class="product__item-name">Цвет:</div>
                                <div class="product__item-val">Серый, черный</div>
                            </div>
                            <div class="product__item">
                                <div class="product__item-name">Графический процессор:</div>
                                <div class="product__item-val">Radeon RX 570</div>
                            </div>
                            <div class="product__item">
                                <div class="product__item-name">Объем видеопамяти:</div>
                                <div class="product__item-val">8 Гб</div>
                            </div>
                            <div class="product__item">
                                <div class="product__item-name">Тип памяти:</div>
                                <div class="product__item-val">GDDR5</div>
                            </div>
                            <div class="product__item">
                                <div class="product__item-name">Интерфейс подключения:</div>
                                <div class="product__item-val">PCI-E</div>
                            </div>
                            <div class="product__item">
                                <div class="product__item-name">Гарантия:</div>
                                <div class="product__item-val">36 мес.</div>
                            </div>
                            <div class="product__item">
                                <div class="product__item-name">Страна-производитель:</div>
                                <div class="product__item-val">Китай</div>
                            </div>
                            <div class="product__item">
                                <div class="product__item-name">Цвет:</div>
                                <div class="product__item-val">Серый, черный</div>
                            </div>
                            <div class="product__item">
                                <div class="product__item-name">Графический процессор:</div>
                                <div class="product__item-val">Radeon RX 570</div>
                            </div>
                            <div class="product__item">
                                <div class="product__item-name">Объем видеопамяти:</div>
                                <div class="product__item-val">8 Гб</div>
                            </div>
                            <div class="product__item">
                                <div class="product__item-name">Тип памяти:</div>
                                <div class="product__item-val">GDDR5</div>
                            </div>
                            <div class="product__item">
                                <div class="product__item-name">Интерфейс подключения:</div>
                                <div class="product__item-val">PCI-E</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?
    $html = ob_get_contents();
    ob_end_clean();
    return $html;
}