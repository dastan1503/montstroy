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

    var openMenu = function () {
      navBlock.classList.add('header__nav--active');
    };
    var closeMenu = function () {
      navBlock.classList.remove('header__nav--active');
    };

    var burgerClickHandler = function () {
      openMenu();
    };
    var closeMenuClickHandler = function () {
      closeMenu();
    };

    burgerButton.addEventListener('click', burgerClickHandler);

    document.addEventListener('click', function () {
      if (navBlock.classList.contains('header__nav--active')) {
        closeMenu();
      }
    });

  })();


/*  (function () {
    var burgerButton = document.querySelector('.header__burger');
    var navBlock = document.querySelector('.header__nav');

    var burgerClickHandler = function () {
      navBlock.classList.add('header__nav--active');
      closeMenu();
    };

    var closeMenu = function () {
      var closeMenuClickHandler = function () {
        hideMenu();
      };

      var hideMenu = function () {
        if (navBlock.classList.contains('header__nav--active')) {
          navBlock.classList.remove('header__nav--active');
        }
        document.removeEventListener('click', closeMenuClickHandler);
      };


      var closingMenu = function () {
        document.addEventListener('click', closeMenuClickHandler);
      };
      closingMenu();
    };

    burgerButton.addEventListener('click', burgerClickHandler);
  })();
*/

  // аккордеоны в сервисах
  (function () {
    var clickableItems = document.querySelectorAll('.services__main-item h3');
    var container = document.querySelector('.services__main-list');
    var blocks = document.querySelectorAll('.services__main-item');

    if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = Array.prototype.forEach;
    }

    clickableItems.forEach(function (element, index) {
      element.addEventListener('click', function (evt) {
        container.style.height = null;
        evt.preventDefault();
        var activeElement = document.querySelector('.services__main-item--active');
        var media = window.matchMedia('(max-width: 767px)').matches;

        if (media) {
          container.style.height = 'auto;';
          blocks[index].classList.toggle('services__main-item--active');
        } else {
          activeElement.classList.remove('services__main-item--active');
          blocks[index].classList.add('services__main-item--active');
          container.style.height = blocks[index].clientHeight + 'px';
        }

        console.log(blocks[index].clientHeight + ', ' + container.style.height);
      });
    });
  })();
})();
