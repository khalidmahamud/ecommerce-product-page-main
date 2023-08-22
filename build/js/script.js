const hamburgerMenu = document.querySelector('#hamburger-menu');
const mobileMenu = document.querySelector('#mobile-menu');
const closeMenu = document.querySelector('#close-menu');
const overlay = document.querySelector('#overlay');
const productImg = document.querySelectorAll('.carousel-img');
const productThumb = document.querySelectorAll('#thumbnail div');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

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

document.addEventListener('click', (e) => {
    if(e.target.id === 'overlay') {
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('hidden');
        overlay.classList.toggle('active');
    }
});

let current = 0;

nextBtn.addEventListener('click', () => {
    productImg[current].setAttribute('aria-current', 'false');
    productThumb[current].setAttribute('aria-current', 'false');

    current = (current + 1) % 4;

    productImg[current].setAttribute('aria-current', 'true');
    productThumb[current].setAttribute('aria-current', 'true');
});

prevBtn.addEventListener('click', () => {
    productImg[current].setAttribute('aria-current', 'false');
    productThumb[current].setAttribute('aria-current', 'false');

    if(current === 0) {
        current = 3
    }
    else {
        --current;
    }

    productImg[current].setAttribute('aria-current', 'true');
    productThumb[current].setAttribute('aria-current', 'true');    
});