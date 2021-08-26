 'use strict';
// let data = document.querySelector('.promo_data');
//     data.textContent = new Date();

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

      let menuBtns = document.querySelector('.menu-button');
      const menu = document.querySelector('.nav');
      const menuCloseBtn = document.querySelector('.close-menu');
        menuBtns.addEventListener('click',()=>{
           menu.classList.toggle('is-open');
           menuCloseBtn.style.display = 'block';
         });
         menuCloseBtn.addEventListener('click',()=>{
          menu.classList.remove('is-open');
          menuBtns.style.display = 'block';
          menuCloseBtn.style.display = 'none';
        });
          