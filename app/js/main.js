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
        responsive: [
            {
                breakpoint: 1116,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    arrows: false,
                    rows: 4,
                }
            },
            {
                breakpoint: 910,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    rows: 5,
                    arrows: false,
                },
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    rows: 6,
                    arrows: false,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 12,
                    arrows: false,
                },
            },
        ],
    });

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
        responsive: [
            {
                breakpoint: 1116,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    arrows: false,
                    rows: 4,
                }
            },
            {
                breakpoint: 910,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    rows: 5,
                    arrows: false,
                },
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    rows: 6,
                    arrows: false,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 12,
                    arrows: false,
                },
            },
        ],
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
        responsive: [
            {
                breakpoint: 1116,
                settings: {
                    slidesToScroll: 3,
                    variableWidth: false,
                    centerMode: false,
                    adaptiveHeight: false,
                    dots: true,
                    appendDots: '.customers-vehicle__buttons',
                    dotsClass: 'customers-vehicle__dots',
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    variableWidth: false,
                    centerMode: false,
                    adaptiveHeight: false,
                    dots: true,
                    appendDots: '.customers-vehicle__buttons',
                    dotsClass: 'customers-vehicle__dots',
                }
            },
            {
                breakpoint: 581,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerMode: false,
                    adaptiveHeight: false,
                    dots: false,
                    appendDots: '.customers-vehicle__buttons',
                    dotsClass: 'customers-vehicle__dots',
                }
            },
            {
                breakpoint: 501,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerMode: false,
                    adaptiveHeight: false,
                    dots: false,
                    appendDots: '.customers-vehicle__buttons',
                    dotsClass: 'customers-vehicle__dots',
                }
            },
        ],
    })

    $('.contact__form-checkbox, .contact__form-input-file').styler();

    $(window).height();
    let e = $(".header").offset().top,
        t = $(window).height(),
        o = $("body").height() + t,
        s = e - 0 * t;
    $(window).on("scroll", function (e) {
        let t = window.pageYOffset,
            n = t > s;
        n || o <= t && !n ? $(".header").addClass("header--sticky") : $(".header").removeClass("header--sticky")
    });

    $('.header__hamburger').on('click', function () {
        $(this).toggleClass('header__hamburger--active')
        $('.header__menu').slideToggle()
    })
    $('.products__item-name').mCustomScrollbar({
        theme: "dark",
        axis: "y",
        setHeight: "38px",
        
    });
    $('.lazy').Lazy({
        effect: "fadeIn",
        effectTime: 2000,
        threshold: 0,
        combined: true,
        placeholder: "../images/loading.webp"
    });
})

