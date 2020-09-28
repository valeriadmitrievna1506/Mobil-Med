// main page

let mainPageSwiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 500,
  pagination: {
    el: ".swiper-pagination",
    bulletClass: "swiper-bullet",
    bulletActiveClass: "swiper-bullet-active",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
});

ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    center: [55.755814, 37.617635],
    zoom: 12,
  });
  var myPlacemark1 = new ymaps.Placemark([55.784597, 37.597432]);
  var myPlacemark2 = new ymaps.Placemark([55.781053, 37.599902]);
  var myPlacemark3 = new ymaps.Placemark([55.743456, 37.652688]);
  var myPlacemark4 = new ymaps.Placemark([55.740613, 37.552139]);
  var myPlacemark5 = new ymaps.Placemark([55.753792, 37.652759]);
  myMap.geoObjects.add(myPlacemark1);
  myMap.geoObjects.add(myPlacemark2);
  myMap.geoObjects.add(myPlacemark3);
  myMap.geoObjects.add(myPlacemark4);
  myMap.geoObjects.add(myPlacemark5);
}

$(".medbooksText .container .blue-button").click(function () {
  $('.hidden-text-block').slideToggle(1500);
  $(".medbooksText .container .blue-button").hide();
});
