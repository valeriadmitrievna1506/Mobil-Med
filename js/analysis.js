// analysis

var analysisSwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        bulletClass: 'swiper-bullet',
        bulletActiveClass: 'swiper-bullet-active',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });