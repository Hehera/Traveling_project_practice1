// Carousel
var owl = $(".owl-carousel");
owl.owlCarousel({
  center: true,
  // циклічність безкінечна прокрутка
  loop: true,
  // отсуп між ними
  margin: 30,
  startPosition: 1,
  // 3 слайда за замовчуванням
  items: 3,
  responsive: {
    850: {
      // items: 2,
    },

    1000: {
      // margin: 20,
      // items: 3,
    },
    1200: {
      // margin: 30,
    },
  },
});

$(".slider__btn--prev").click(function () {
  owl.trigger("prev.owl.carousel");
});

$(".slider__btn--next").click(function () {
  owl.trigger("next.owl.carousel");
});

// nav icon

var navBtn = document.querySelector(".nav__toggle");
var nav = document.querySelector(".nav");
var menuIcon = document.querySelector(".menu-icon");

navBtn.onclick = function () {
  nav.classList.toggle("nav--mobile");
  menuIcon.classList.toggle("menu-icon--active");
  document.body.classList.toggle("no-scroll");
};
