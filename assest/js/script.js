new Swiper('.slider-wrapper', {
    loop: true,
    gapCursor: true,
    spaceBetween: 20,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBultets: true
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          },
    }
});