const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  rewind: true,
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const header = document.querySelector('#header');
const accardion_btn = document.querySelectorAll('.accardion-btn');
const accardion_body = document.querySelectorAll('.accardion-body');
const hamb_btn = document.querySelector('.hamb_btn');
const top_line = document.querySelector('.top-line');

const mobile_nav_links = document.querySelector('.mobile_nav_links');
const hamburger_menu = document.querySelector('.hamburger_menu');

hamb_btn.addEventListener('click', () => {
  if (!top_line.classList.contains('openHamb')) {
    top_line.classList.add('openHamb');
    hamburger_menu.style.top = '99%';
  } else {
    top_line.classList.remove('openHamb');
    hamburger_menu.style.top = '-1000%';
  }
});

window.addEventListener('scroll', function (e) {
  if (this.window.scrollY > 40) {
    header.style.backgroundColor = '#2d386f80';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

accardion_btn.forEach((item, index) => {
  item.addEventListener('click', () => {
    accardion_body.forEach((body, i) => {
      if (i === index) {
        if (!body.classList.contains('autoHeight')) {
          body.classList.add('autoHeight');
          item.style.rotate = '45deg';
        } else {
          body.classList.remove('autoHeight');
          item.style.rotate = '0deg';
        }
      }
    });
  });
});
