import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

new Swiper(".spot-showcase-carousel", {
  modules: [Navigation, Pagination, Autoplay],
  direction: "horizontal",
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 7000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-custom-spot-showcase",
    prevEl: ".swiper-button-prev-custom-spot-showcase",
  },
  breakpoints: {
    1500: { slidesPerView: 3 },
    1050: { slidesPerView: 2 },
    600: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
});

new Swiper(".restaurant-list-carousel", {
  modules: [Navigation, Pagination, Autoplay],
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next-custom-restaurant-list",
    prevEl: ".swiper-button-prev-custom-restaurant-list",
  },
  breakpoints: {
    1300: { slidesPerView: 4, spaceBetween: 30 },
    1100: { slidesPerView: 3, spaceBetween: 20 },
    676: { slidesPerView: 2, spaceBetween: 10 },
    0: { slidesPerView: 1, spaceBetween: 5 },
  },
});

new Swiper(".testimonial-carousel", {
  modules: [Navigation, Pagination, Autoplay],
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
