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
const middle_line = document.querySelector('.middle-line');
const bottom_line = document.querySelector('.bottom-line');
const mobile_nav_links = document.querySelector('.mobile_nav_links');
const hamburger_menu = document.querySelector('.hamburger_menu');

hamb_btn.addEventListener('click', () => {
  console.log(!hamburger_menu.classList.contains('openHamb'));

  if (!hamburger_menu.classList.contains('openHamb')) {
    hamburger_menu.classList.add('openHamb');
    top_line.style.rotate = '45deg';
    top_line.style.transform = 'translateY(6px)';
    bottom_line.style.rotate = '-45deg';
    bottom_line.style.transform = 'translateY(-6px)';
    middle_line.style.display = 'none';
  } else {
    top_line.style.rotate = '0deg';
    top_line.style.transform = 'translateY(0px)';
    bottom_line.style.rotate = '0deg';
    bottom_line.style.transform = 'translateY(0px)';
    middle_line.style.display = 'flex';
    hamburger_menu.classList.remove('openHamb');
  }
});

window.addEventListener('scroll', function (e) {
  if (this.window.scrollY > 30) {
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
