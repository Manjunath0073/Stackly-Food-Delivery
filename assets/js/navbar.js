const hamburger =
document.querySelector('.hamburger');

const mobileMenu =
document.querySelector('.mobile-menu');

const closeMenu =
document.querySelector('.close-menu');

const overlay =
document.querySelector('.menu-overlay');

hamburger.addEventListener('click', () => {

    mobileMenu.classList.add('active');

    overlay.classList.add('active');

});

closeMenu.addEventListener('click', () => {

    mobileMenu.classList.remove('active');

    overlay.classList.remove('active');

});

overlay.addEventListener('click', () => {

    mobileMenu.classList.remove('active');

    overlay.classList.remove('active');

});