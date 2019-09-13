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
    burgerButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      navBlock.classList.toggle('header__nav--active');
    });
  })();

  // аккордеоны в сервисах
  (function () {
    var clickableItems = document.querySelectorAll('.services__main-item');
    var container = document.querySelector('.services__main-list');

    clickableItems.forEach(function (element) {
      element.addEventListener('click', function (evt) {
        container.style = '';
        evt.preventDefault();
        var activeElement = document.querySelector('.services__main-item--active');
        var media = window.matchMedia('(max-width: 767px)').matches;

        if (media) {
          element.classList.toggle('services__main-item--active');
        } else {
          activeElement.classList.remove('services__main-item--active');
          element.classList.add('services__main-item--active');
        }

        container.style = 'height: ' + element.clientHeight + 'px;';
      });
    });
  })();

})();
