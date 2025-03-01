// banner start
// new Typed('.dynamic-txts', {
//   strings: ['Web Developer', 'Graphic Designer', "Web Designer", 'Video Editor',],
//   typeSpeed: 50,
//   backSpeed: 50,
//   loop: true
// });
// banner end
//placedStudent start 
new Swiper(".placedStudentSwiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  mousewheel: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBultets: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
//placedStudent end 
//Student Review start 
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
    0: {
      slidesPerView: 1
    },
    680: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 3
    },
  }
});
// Student Review start end
// Why choose section start
new Swiper(".mySwiper", {
  loop: true,
  gapCursor: true,
  spaceBetween: 0,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }, navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
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
// Why choose section end


