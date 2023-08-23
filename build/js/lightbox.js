const mainCarousel = document.querySelector('#carousel-1');
const mainCarouselSlides = mainCarousel.querySelectorAll('.carousel-img');
const mainCarouselThumbnails = mainCarousel.querySelectorAll('.thumbnail');
const mainPrevSlideBtn = mainCarousel.querySelector('#prev-slide-btn');
const mainNextSlideBtn = mainCarousel.querySelector('#next-slide-btn');

const lightBox = document.querySelector('#lightbox');
const lightBoxCarousel = lightBox.querySelector('#carousel-2');
const lightBoxCarouselSlides = lightBoxCarousel.querySelectorAll('.carousel-img');
const lightBoxCarouselThumbnails = lightBoxCarousel.querySelectorAll('.thumbnail');
const lightBoxPrevSlideBtn = lightBoxCarousel.querySelector('#prev-slide-btn');
const lightBoxNextSlideBtn = lightBoxCarousel.querySelector('#next-slide-btn');
const lightBoxCloseBtn = lightBox.querySelector('#lightbox-close-btn');

let current = 0, next, prev;


const slideNext = (slides, thumbnails) => {
    slides[current].setAttribute('aria-current', 'false');
    thumbnails[current].setAttribute('aria-current', 'false');

    next = (current + 1) % slides.length;

    slides[next].setAttribute('aria-current', 'true');
    thumbnails[next].setAttribute('aria-current', 'true');

    current = next;
};

const slidePrev = (slides, thumbnails) => {
    slides[current].setAttribute('aria-current', 'false');
    thumbnails[current].setAttribute('aria-current', 'false');

    if(current === 0) {
        next = slides.length - 1;
    }
    else {
        next = current -= 1;
    }

    slides[next].setAttribute('aria-current', 'true');
    thumbnails[next].setAttribute('aria-current', 'true');
    
    current = next;
};

const selectFromThumbnail = (productImg, thumbnail) => {
    const products = Array.from(productImg.parentElement.children).filter(item => item.tagName !== 'BUTTON');
    const thumbnails = Array.from(thumbnail.parentElement.children);

    products[current].setAttribute('aria-current', false);
    thumbnails[current].setAttribute('aria-current', false);

    next = products.indexOf(productImg);

    productImg.setAttribute('aria-current', true);
    thumbnail.setAttribute('aria-current', true);

    current = next;
};



mainNextSlideBtn.addEventListener('click', () => {
    slideNext(mainCarouselSlides, mainCarouselThumbnails);
});

mainPrevSlideBtn.addEventListener('click', () => {
    slidePrev(mainCarouselSlides, mainCarouselThumbnails);
});

mainCarouselThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        mainCarouselSlides.forEach(slide => {
            if(slide.id === thumbnail.getAttribute('data-thumbnail')) {
                selectFromThumbnail(slide, thumbnail);
            }
        });
    });
});

mainCarouselSlides.forEach(slide => {
    slide.addEventListener('click', () => {
        if(window.innerWidth >= 768) {
            prev = current;

            lightBox.classList.toggle('flex');
            lightBox.classList.toggle('hidden');

            
            const mainActiveThumbnail = mainCarousel.querySelector(`[data-thumbnail="${slide.id}"]`);
            const lightBoxActiveSlide = lightBoxCarousel.querySelector(`#${slide.id}`);
            const lightBoxActiveThumbnail = lightBoxCarousel.querySelector(`[data-thumbnail="${slide.id}"]`);

            mainActiveThumbnail.setAttribute('aria-current', false);
            lightBoxActiveSlide.setAttribute('aria-current', true);
            lightBoxActiveThumbnail.setAttribute('aria-current', true);
            
        }
    });
});


lightBoxNextSlideBtn.addEventListener('click', () => {
    slideNext(lightBoxCarouselSlides, lightBoxCarouselThumbnails);
});

lightBoxPrevSlideBtn.addEventListener('click', () => {
    slidePrev(lightBoxCarouselSlides, lightBoxCarouselThumbnails);
});

lightBoxCarouselThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        lightBoxCarouselSlides.forEach(slide => {
            if(slide.id === thumbnail.getAttribute('data-thumbnail')) {
                selectFromThumbnail(slide, thumbnail);
            }
        });
    });
});


lightBoxCloseBtn.addEventListener('click', () => {
    lightBox.classList.toggle('flex');
    lightBox.classList.toggle('hidden');

    lightBoxCarouselSlides[current].setAttribute('aria-current', false);
    lightBoxCarouselThumbnails[current].setAttribute('aria-current', false);

    mainCarouselSlides[prev].setAttribute('aria-current', false);
    mainCarouselThumbnails[prev].setAttribute('aria-current', false);
    mainCarouselSlides[current].setAttribute('aria-current', true);
    mainCarouselThumbnails[current].setAttribute('aria-current', true);
});
