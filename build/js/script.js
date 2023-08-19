const hamburgerMenu = document.querySelector('#hamburger-menu');
const mobileMenu = document.querySelector('#mobile-menu');
const mainMenu = documtnt.querySelector();
const closeMenu = document.querySelector('#close-menu');
const overlay = document.querySelector('#overlay');

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('hidden');
    overlay.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('hidden');
    overlay.classList.toggle('active');
});