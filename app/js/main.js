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
})

