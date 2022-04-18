let navMainSite = document.querySelector('.site-list');
let navMainUser = document.querySelector('.user-list');
let navToggle = document.querySelector('.main-nav__toggle');

navMainSite.classList.remove('main-nav__list--no-js');
navMainUser.classList.remove('main-nav__list--no-js');


navToggle.addEventListener('click', function () {
  if (navMainSite.classList.contains('main-nav__list--closed')) {
    navMainSite.classList.remove('main-nav__list--closed');
    navMainSite.classList.add('main-nav__list--opened');
  } else {
    navMainSite.classList.add('main-nav__list--closed');
    navMainSite.classList.remove('main-nav__list--opened');
  }

  if (navMainUser.classList.contains('main-nav__list--closed')) {
    navMainUser.classList.remove('main-nav__list--closed');
    navMainUser.classList.add('main-nav__list--opened');
  } else {
    navMainUser.classList.add('main-nav__list--closed');
    navMainUser.classList.remove('main-nav__list--opened');
  }
});

console.log ("hello")
