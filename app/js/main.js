$(function () {
    $('.products-one .products__title').on('click', function () {
        $('.products-one .products__wrapper').slideToggle();
        $(this).toggleClass('active');
    })
    $('.products-two .products__title').on('click', function () {
        $('.products-two .products__wrapper').slideToggle();
        $(this).toggleClass('active');
    })
    $('.product-details--one .product-details__title').on('click', function () {
        $('.product-details--one .product-details__inner').slideToggle();
        $(this).toggleClass('active');
    })
    $('.product-details--two .product-details__title').on('click', function () {
        $('.product-details--two .product-details__inner').slideToggle();
        $(this).toggleClass('active');
    })
    $('.product-details--tree .product-details__title').on('click', function () {
        $('.product-details--tree .product-details__inner').slideToggle();
        $(this).toggleClass('active');
    })
    $('.products__list.list-one').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: '<button type="button" class="products-arrows products-arrows__left">></button>',
        prevArrow: '<button type="button" class="products-arrows products-arrows__right"><</button>',
        rows: 3,
        dots: true,
        dotsClass: 'products__pagination-list',
        appendDots: '.products__pagination.pagination-one',
        centerPadding: '0px',
        swipe: false,
    })
    $('.products__list.list-two').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: '<button type="button" class="products-arrows products-arrows__left">></button>',
        prevArrow: '<button type="button" class="products-arrows products-arrows__right"><</button>',
        rows: 3,
        dots: true,
        dotsClass: 'products__pagination-list',
        appendDots: '.products__pagination.pagination-two',
        centerPadding: '0px',
        swipe: false,
    })
    $('.customers-vehicle__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        centerMode: true,
        centerPadding: '0',
        rows: 0,
        variableWidth: true,
        infinite: true,
        nextArrow: '<button type="button" class="customers-vehicle__arrows arrow-left"><img src="./images/icons/arrow-right.svg" alt=""></button>',
        prevArrow: '<button type="button" class="customers-vehicle__arrows arrow-right"><img src="./images/icons/arrow-left.svg" alt=""></button>',
        autoplay: true,
    })
   
    $('.contact__form-checkbox, .contact__form-input-file').styler();
})

