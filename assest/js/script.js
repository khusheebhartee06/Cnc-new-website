// banner start
var typed = new Typed('.dynamic-txts', {
  strings: ['Web Developer','Graphic Designer',"Web Designer",'Video Editor',],
  typeSpeed: 50,
  backSpeed:50,
  loop:true
});
// banner end
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
// Student Review start end
// Why choose section start
var swiper = new Swiper(".mySwiper", {
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