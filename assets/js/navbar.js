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

const currentPage =
window.location.pathname
.split("/")
.pop() || "index.html";

const navLinks =
document.querySelectorAll(
".nav-link"
);

navLinks.forEach(link => {

    link.classList.remove(
    "active"
    );

    const href =
    link.getAttribute("href");

    if(href === currentPage){

        link.classList.add(
        "active"
        );

    }

});