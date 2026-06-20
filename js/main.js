var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    grabCursor: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 24
        }
    }
});