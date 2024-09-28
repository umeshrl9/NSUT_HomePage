const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },

        620: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        }
    }
  });