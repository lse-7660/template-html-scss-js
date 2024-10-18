// script-swiper-intro

var swiper = new Swiper('.slide-intro', {
    slidesPerView: 1,
    spaceBetween: 10,
    // autoplay: true,
    loop: true,
    pagination: {
        el: '.slide-intro .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // breakpoints: {
    //     640: {
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //     },
    //     768: {
    //         slidesPerView: 4,
    //         spaceBetween: 40,
    //     },
    //     1024: {
    //         slidesPerView: 5,
    //         spaceBetween: 50,
    //     },
    // },
});

// Initialize Swiper

var swiper = new Swiper('.slide-studio', {
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
        el: '.slide-studio .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
