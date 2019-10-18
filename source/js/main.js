'use strict';
(function () {

  // скроллиги
  (function () {

    var KEYCODE_ENTER = 13;
    var servicesBlock = document.querySelector('.services');
    var contactsBlock = document.querySelector('.footer');
    var scrollButtonService = document.querySelector('.main-screen__services');
    var scrollButtonContacts = document.querySelector('.main-screen__contacts');
    var scrollButtoncontacts2 = document.querySelector('.header__scroll');

    var scrolling = function (scrollItem, scrollToBlock) {
      scrollItem.addEventListener('keydown', function (evt) {
        if (evt.keyCode === KEYCODE_ENTER) {
          evt.preventDefault();
          scrollToBlock.scrollIntoView({block: 'start', behavior: 'smooth'});
        }
      });

      scrollItem.addEventListener('click', function (evt) {
        evt.preventDefault();
        scrollToBlock.scrollIntoView({block: 'start', behavior: 'smooth'});
      });
    };
    scrolling(scrollButtonService, servicesBlock);
    scrolling(scrollButtonContacts, contactsBlock);
    scrolling(scrollButtoncontacts2, contactsBlock);
  })();

  // главное меню в хедере
  (function () {
    var burgerButton = document.querySelector('.header__burger');
    var navBlock = document.querySelector('.header__nav');

    var toggleMenu = function () {
      navBlock.classList.toggle('header__nav--active');
    };

    var documentClickHandler = function (evt) {
      var target = evt.target;
      do {
        if (target === navBlock) {
          return;
        }
        target = target.parentNode;
      } while (target);

      navBlock.classList.remove('header__nav--active');
    };

    burgerButton.addEventListener('click', function (evt) {
      evt.stopPropagation();
      toggleMenu();
    });

    document.addEventListener('click', documentClickHandler);
  })();

  // аккордеоны в сервисах
  (function () {
    var clickableItems = document.querySelectorAll('.services__main-item h3');
    var blocks = document.querySelectorAll('.services__main-item');

    if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = Array.prototype.forEach;
    }

    clickableItems.forEach(function (element, index) {
      element.addEventListener('click', function (evt) {
        evt.preventDefault();
        blocks[index].classList.toggle('services__main-item--active');
      });
    });
  })();

  // запуск полифилла для svg-спрайта
  (function () {
    svg4everybody();
  })();

  // инициализация слайдеров
  (function () {
    var mySwiper1 = new Swiper('.main-screen__slider', {
      init: false,
      direction: 'horizontal',
      centeredSlides: true,
      loop: true,
      initialSlide: 1,
      slidesPerView: 'auto',
      slideToClickedSlide: true,

      pagination: {
        el: '.swiper-pagination',
      }
    });

    var mySwiper2 = new Swiper('.partners__slider', {
      init: false,
      direction: 'horizontal',
      centeredSlides: true,
      loop: true,
      initialSlide: 1,
      slidesPerView: 'auto',
      slideToClickedSlide: true,

      pagination: {
        el: '.partners__slider .swiper-pagination',
      }
    });

    if (window.matchMedia('(max-width: 1200px)').matches) {
      mySwiper1.init();
      mySwiper2.init();
    }
  })();
})();

// наложение маски ввода на ввод телефона
(function () {
  var element = document.getElementById('phone');
  var maskOptions = {
    mask: '+0(000)000-00-00'
  };
  var mask = IMask(element, maskOptions);
}());
