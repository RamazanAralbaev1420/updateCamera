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

const swiper2 = new Swiper('.swiper2', {
  loop: true,
  rewind: true,
  slidesPerView: 3,
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const header = document.querySelector('#header');
const accardion_btn = document.querySelectorAll('.accardion-btn');
const accardion_body = document.querySelectorAll('.accardion-body');

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
