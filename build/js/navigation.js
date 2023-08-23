const hamburgerMenu = document.querySelector('#hamburger-menu');
const mobileMenu = document.querySelector('#mobile-menu');
const closeMenu = document.querySelector('#close-menu');

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('hidden');
    overlay.classList.toggle('navigation-overlay');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('hidden');
    overlay.classList.toggle('navigation-overlay');
});

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('navigation-overlay')) {
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('hidden');
        overlay.classList.toggle('navigation-overlay');
    }
});