import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();



// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

// Feature slider
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
  });

  
  const slider = new Swiper(".creator-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    },
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
  });

const faqs = document.querySelectorAll('.faq-item');
const header = document.querySelector('header');
const navbarList = document.querySelector('.navbar-list');
const burger = document.querySelector('.burger');
const searchBox = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-btn');
const sections = document.querySelectorAll('section');



faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});


burger.addEventListener('click', () => {
  burger.classList.toggle('burger-active');
  navbarList.classList.toggle('show-menu');
  sections.forEach((item) => {
    item.classList.toggle('blur');
  });
});


searchBtn.addEventListener('click', (e) => {
  let element = e.currentTarget;
    element.parentElement.classList.toggle('search-active');
  if(element.parentElement.classList.contains('search-active')){
    element.style.borderRadius = '0 50vh 50vh 0';
    element.style.background = 'rgba(255, 255, 255, 0.2)';

  } else{
    element.style.borderRadius = '50vh';
    element.style.background = 'linear-gradient(214.02deg, #B75CFF 6.04%, #671AE4 92.95%)';
  }

});

// window.addEventListener('scroll', reveal);
// function reveal() {
//   let reveals = document.querySelectorAll('section');
//   for(let i = 0; i < reveals.length; i++){
//     let windowHeight = window.innerHeight;
//     let revealtop = reveals[i].getBoundingClientRect().top;
//     let revealpoint = 150;
//     if(revealtop < windowHeight - revealpoint){
//       reveals[i].classList.add('active');
//     }
//     else{
//       reveals[i].classList.remove('active');
//     }
//   }
// }